from django.urls import path
from . import views

urlpatterns = [
    path("", views.login),
    path("register", views.register),
    path("dashboard", views.dashboard),
    path("calculationDetails/<int:sev_id>", views.detailsCalculation),
    path("calculationEdit/<int:sev_id>", views.editCalculation),
    path("calculationDelete/<int:sev_id>", views.deleteCalculation),
    path("logout", views.logout),
    path("process/login", views.loginProcess),
    path("process/register", views.registerProcess),
    path("process/edit/<int:sev_id>", views.editProcess),
    path("process/calculation", views.calculationProcess)
]