from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("record", views.record, name="record"),
    path("text_result", views.text_result, name="text_result")
]