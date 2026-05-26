from django.urls import path

from . import views

app_name = "marketplace"

urlpatterns = [
    path("", views.home, name="home"),
    path("api/vehicle-intel/", views.vehicle_intel, name="vehicle_intel"),
    path("service-worker.js", views.service_worker, name="service_worker"),
]
