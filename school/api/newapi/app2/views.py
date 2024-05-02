from django.shortcuts import render
from app2.models import *
from app2.serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json


@api_view(['GET', 'POST'])
def TeachersView(request):
    if request.method == 'GET':
        datas = Teachers.objects.all()
        serializer =TeachersSerializer(datas, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = TeachersSerializer(data=data)
        print("Request data:", request.data)  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view([ 'PUT', 'DELETE'])
def teacher_detail(request, id):
   
    try:
        datas = Teachers.objects.get(id=id)
    except Teachers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = TeachersSerializer(datas, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        datas.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)          


#subjectsView
@api_view(['GET', 'POST'])
def SubjectsView(request):
    if request.method == 'GET':
        datas = Subject.objects.all()
        serializer =SubjectSerializer(datas, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = SubjectSerializer(data=data)
        print("Request data:", request.data)  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view([ 'PUT', 'DELETE'])
def subject_detail(request, id):
   
    try:
        datas = Subject.objects.get(id=id)
    except Subject.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = SubjectSerializer(datas, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        datas.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    
    

#Attendance

@api_view(['GET', 'POST'])

def AttendanceView(request):
    if request.method == 'GET':
        datas = AttendanceDetails.objects.all()
        serializer =AttendanceDetailsSerializer(datas, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = AttendanceDetailsSerializer(data=data)
        print("Request data:", request.data)  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view([ 'PUT', 'DELETE'])
def attendance_detail(request, id):
   
    try:
        datas = AttendanceDetails.objects.get(id=id)
    except AttendanceDetails.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = AttendanceDetailsSerializer(datas, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        datas.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    
        