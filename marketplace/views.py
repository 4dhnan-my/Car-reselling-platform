import json
import os
import urllib.error
import urllib.request

from django.http import FileResponse, JsonResponse
from django.shortcuts import render
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt


def home(request):
    return render(request, "marketplace/index.html")


def service_worker(request):
    service_worker_path = settings.BASE_DIR / "marketplace" / "static" / "marketplace" / "service-worker.js"
    return FileResponse(open(service_worker_path, "rb"), content_type="application/javascript")


def vehicle_intel(request):
    brand = request.GET.get("brand", "Luxury").strip()
    model = request.GET.get("model", "Vehicle").strip()
    year = int(request.GET.get("year") or 2024)
    price_value = int(float(request.GET.get("price") or 0))
    fuel = request.GET.get("fuel", "Petrol").strip()
    body = request.GET.get("body", "Luxury vehicle").strip()

    age = max(0, 2026 - year)
    market_value = round(price_value * max(0.62, 1 - age * 0.045)) if price_value else 0
    resale_value = round(market_value * (0.82 if age < 3 else 0.74))
    premium = brand.lower() in {"rolls-royce", "bentley", "ferrari", "lamborghini", "mclaren"}

    return JsonResponse(
        {
            "vehicle": f"{brand} {model}",
            "market_value_inr": market_value,
            "resale_value_inr": resale_value,
            "engine": "Hybrid/electric performance system" if fuel.lower() in {"hybrid", "electric"} else "High-output luxury performance engine",
            "horsepower": 760 if premium else 560,
            "torque_nm": 900 if premium else 720,
            "top_speed_kmph": 325 if premium else 260,
            "mileage": "4-8 km/l city, usage dependent" if fuel.lower() not in {"electric", "jet a"} else "Electric range/efficiency varies by battery and duty cycle",
            "competitors": ["Bentley", "Porsche", "Mercedes-Maybach"] if body.lower() != "coupe" else ["Ferrari", "Porsche", "McLaren"],
            "facelift": "Check current dealer allocation for MY2026 updates, cabin tech refreshes, and limited editions.",
            "fetched_at": "Live Django concierge estimate",
        }
    )


@csrf_exempt
def concierge_chat(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST required"}, status=405)

    api_key = os.environ.get("GOOGLE_AI_API_KEY")
    if not api_key:
        return JsonResponse(
            {"error": "GOOGLE_AI_API_KEY is not configured on the server."},
            status=503,
        )

    try:
        payload = json.loads(request.body.decode("utf-8"))
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON payload."}, status=400)

    prompt = str(payload.get("prompt", "")).strip()
    vehicle = payload.get("vehicle") or {}
    intel = payload.get("intel") or {}
    if not prompt:
        return JsonResponse({"error": "Prompt is required."}, status=400)

    vehicle_context = json.dumps(
        {
            "vehicle": vehicle,
            "market_intelligence": intel,
        },
        ensure_ascii=True,
    )
    system_text = (
        "You are Crown Vault's ultra-premium AI luxury concierge. "
        "Help verified buyers evaluate and purchase luxury cars, supercars, yachts, and private jets. "
        "Be concise, discreet, professional, and specific. Use INR pricing where values are available. "
        "Discuss market value, resale value, specifications, horsepower, torque, top speed, acceleration, "
        "service history, ownership, competitors, maintenance cost, insurance estimate, luxury features, "
        "fuel efficiency, demand, depreciation/appreciation, upcoming launches, purchase readiness, and global delivery. "
        "Do not claim live dealer confirmation unless the provided context says so."
    )
    body = {
        "systemInstruction": {"parts": [{"text": system_text}]},
        "contents": [
            {
                "role": "user",
                "parts": [
                    {
                        "text": (
                            f"Selected asset context: {vehicle_context}\n\n"
                            f"Buyer question: {prompt}"
                        )
                    }
                ],
            }
        ],
        "generationConfig": {
            "temperature": 0.45,
            "topP": 0.9,
            "maxOutputTokens": 420,
        },
    }
    request_data = json.dumps(body).encode("utf-8")
    api_url = (
        "https://generativelanguage.googleapis.com/v1beta/models/"
        f"gemini-2.5-flash:generateContent?key={api_key}"
    )
    api_request = urllib.request.Request(
        api_url,
        data=request_data,
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    try:
        with urllib.request.urlopen(api_request, timeout=18) as response:
            result = json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", errors="replace")
        return JsonResponse({"error": "Google AI request failed.", "detail": detail}, status=502)
    except (urllib.error.URLError, TimeoutError):
        return JsonResponse({"error": "Google AI is unreachable from this server."}, status=502)

    candidates = result.get("candidates") or []
    parts = candidates[0].get("content", {}).get("parts", []) if candidates else []
    answer = "\n".join(part.get("text", "") for part in parts).strip()
    if not answer:
        return JsonResponse({"error": "Google AI returned an empty response."}, status=502)

    return JsonResponse({"reply": answer, "provider": "gemini-2.5-flash"})
