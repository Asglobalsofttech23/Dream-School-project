from django.urls import path
from app4.views import *
urlpatterns = [
    path('join/',  join_view),
    path('check/',  user_check_api),
    # path('orm/',  orm_view),
    
]