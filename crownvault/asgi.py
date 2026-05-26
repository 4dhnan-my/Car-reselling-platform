"""ASGI config for Crown Vault."""
import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "crownvault.settings")

application = get_asgi_application()
