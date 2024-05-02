from django.shortcuts import render
from app9.models import *
from app9.serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json


@api_view(['GET'])
def ts_join(request,id):
    teachers = Tregistration.objects.filter(subjects__sub_id = id)
    teacher_names = [{'name': teacher.name, 'address': teacher.address} for teacher in teachers]
    return Response(teacher_names)

