# Crown Vault

Crown Vault is a luxury-asset marketplace interface backed by Django. The current project presents luxury cars, yachts and private jets, with vehicle-intelligence estimates and an optional Gemini-powered concierge chat endpoint.

## Features in the current code

- Single-page marketplace interface with hash-based sections for cars, yachts, jets, comparisons, account screens and delivery information
- Responsive styling, theme toggle, manifest and service-worker support
- Django views for the marketplace home page and service worker
- Vehicle-intelligence endpoint at `/api/vehicle-intel/` that returns estimated values using a local depreciation formula
- Optional AI concierge endpoint at `/api/concierge-chat/`, which calls Gemini 2.5 Flash when a server-side API key is configured

> **Important:** The vehicle figures are formula-based estimates, not live market valuations. The repository does not currently show a connected inventory database, payment provider, verified buyer workflow or live delivery-tracking integration. Treat interface labels and sample contact/partner details as demo content until connected to real services.

## Tech stack

- Python and Django
- HTML, CSS and JavaScript
- Google Gemini API (optional concierge integration)
- SQLite configured by Django's default settings

## Run locally

1. Install Python 3.10+ and create a virtual environment.
2. Install Django:

   ```bash
   python -m venv .venv
   # Windows
   .venv\Scripts\activate
   # macOS/Linux
   source .venv/bin/activate
   pip install Django
   ```

3. Optional: copy `.env.example` values into your environment and set `GOOGLE_AI_API_KEY` to a valid Google AI API key. The concierge endpoint returns a configuration error when the key is absent; the rest of the site can run without it.
4. Apply migrations and start Django:

   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

5. Open `http://127.0.0.1:8000/`.

## Project structure

```text
.
├── crownvault/                 # Django project settings and URL configuration
├── marketplace/
│   ├── views.py                # Home, vehicle-intel and concierge endpoints
│   ├── urls.py                 # Marketplace routes
│   ├── templates/marketplace/  # Django page template
│   └── static/marketplace/     # Main frontend assets
├── app.js                      # Root-level legacy/static frontend asset
├── index.html                  # Root-level static page
├── styles.css                  # Root-level stylesheet
├── manage.py
└── .env.example
```

The Django route serves the template in `marketplace/templates/marketplace/` and its assets from `marketplace/static/marketplace/`.

## Roadmap

- Replace formula-only vehicle estimates with sourced, clearly timestamped market data
- Add persistent inventory, buyer accounts and enquiry management
- Add server-side validation, authentication and authorization for private actions
- Connect real payment, identity-verification and delivery providers before advertising those workflows as operational
- Add automated tests for the Django endpoints and frontend flows
- Move production secrets to environment variables and disable Django debug mode for deployment

## Security and deployment

This repository is a development project. Review Django's development secret key, debug settings, allowed hosts, CSRF handling and API rate limiting before any public deployment. Never commit real API keys or production credentials.
