from django.urls import path
from app8.views import *
urlpatterns = [
    path('studentsdetails/',  ParentView),
    # path('parentsdetails/',  get_students_with_parents),
    path('fee_joins/',  fees_join),
]