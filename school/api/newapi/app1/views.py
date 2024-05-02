from django.shortcuts import render
from app1.models import *
from app1.serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json



@api_view(['GET', 'POST'])
def MembersView(request):
    if request.method == 'GET':
        datas = Members.objects.all()
        serializer = MembersSerializer(datas, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = MembersSerializer(data=data)
        print("Request data:", request.data)  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view([ 'PUT', 'DELETE'])
def member_detail(request, id):
   
    try:
        datas = Members.objects.get(id=id)
    except Members.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = MembersSerializer(datas, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        datas.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)          


#attendance view

   



     

#FeesDetails

@api_view(['GET', 'POST'])
def FeesView(request):
    if request.method == 'GET':
        datas = Feesdetails.objects.all()
        serializer = FeesdetailsSerializer(datas, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = FeesdetailsSerializer(data=data)
        print("Request data:", request.data)  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     
    

@api_view([ 'PUT', 'DELETE'])
def fees_detail(request, id):
   
    try:
        datas = Feesdetails.objects.get(id=id)
    except Feesdetails.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = FeesdetailsSerializer(datas, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        datas.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)          


#Examination

@api_view(['GET', 'POST'])
def ExaminationView(request):
    if request.method == 'GET':
        datas = Examination.objects.all()
        serializer = ExaminationSerializer(datas, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = ExaminationSerializer(data=data)
        print("Request data:", request.data)  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     

@api_view([ 'PUT', 'DELETE'])
def exam_details(request, id):
   
    try:
        datas = Examination.objects.get(id=id)
    except Examination.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = ExaminationSerializer(datas, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        datas.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)       
    

