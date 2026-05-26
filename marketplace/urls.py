from django.urls import path

from . import views

app_name = "marketplace"

urlpatterns = [
    path("", views.home, name="home"),
    path("api/vehicle-intel/", views.vehicle_intel, name="vehicle_intel"),
    path("api/concierge-chat/", views.concierge_chat, name="concierge_chat"),
    path("service-worker.js", views.service_worker, name="service_worker"),
]
