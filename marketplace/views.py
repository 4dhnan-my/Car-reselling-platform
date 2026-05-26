from django.http import FileResponse, JsonResponse
from django.shortcuts import render
from django.conf import settings


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
