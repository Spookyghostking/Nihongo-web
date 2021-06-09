from django.urls import path
from . import views


app_name = "nihongo"
urlpatterns = [
    path("", views.index, name="index"),
    path("stop", views.stop, name="stop"),
    path("flash", views.flash, name="flash")
]
