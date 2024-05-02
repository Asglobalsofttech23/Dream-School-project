from django.urls import path
from app2.views import *
urlpatterns = [
    path('teachers/', TeachersView),
    path('teachers/<int:id>', teacher_detail),
    path('subject/', SubjectsView),
    path('subject/<int:id>/', subject_detail),
    path('attendance/',  AttendanceView),
    path('attendance/<int:id>', attendance_detail),
]