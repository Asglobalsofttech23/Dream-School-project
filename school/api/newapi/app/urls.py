from django.urls import path
from app.views import PostView,post_detail

urlpatterns = [
    path('post/', PostView),
    path('post/<int:id>', post_detail),
]