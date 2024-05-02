from django.shortcuts import render
from app.models import Students
from app.serializers import StudentsSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.renderers import JSONRenderer
# Create your views here.

@api_view(['GET', 'POST'])

def PostView(request):
    if request.method == 'GET':
        datas = Students.objects.all()
        serializer = StudentsSerializer(datas, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StudentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'PUT', 'DELETE'])
def post_detail(request, id):
   
    try:
        datas = Students.objects.get(id=id)
    except Students.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = StudentsSerializer(datas)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = StudentsSerializer(datas, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        datas.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)       