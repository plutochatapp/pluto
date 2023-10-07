from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("get_user/<str:username>", views.get_user, name="get_user"),
]