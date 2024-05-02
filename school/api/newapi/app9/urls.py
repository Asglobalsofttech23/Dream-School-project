from django.urls import path
from app9.views import *
urlpatterns = [
    path('ts/<int:id>',  ts_join),
    # path('ts/', ),
    # path('orm/',  orm_view),
    
]