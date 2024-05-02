from django.urls import path
from app1.views import *
urlpatterns = [
    path('members/',  MembersView),
    path('members/<int:id>', member_detail),
    path('fees/',  FeesView),
    path('fees/<int:id>',  fees_detail),
    path('exam/',  ExaminationView),
    path('exam/<int:id>',  exam_details),
]