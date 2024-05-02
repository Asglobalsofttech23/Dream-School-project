from django.shortcuts import render
from django.shortcuts import render
from app4.models import *
from app4.serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json
import datetime


@api_view(['GET'])
def join_view(request):
    query = '''
        SELECT app4_Class.st_id, app4_Class.name, app4_stddetails.classnum, app4_stddetails.section, app4_stddetails.attendance,
               count(CASE WHEN app4_stddetails.attendance='Present' THEN 1 END) AS present_count,
               count(CASE WHEN app4_stddetails.attendance='Absent' THEN 1 END) AS absent_count,
               strftime('%Y-%m', date) AS month
        FROM app4_Class
        INNER JOIN app4_stddetails ON app4_Class.st_id = app4_stddetails.std_id_id
        GROUP BY month
    '''
    queryset = Class.objects.raw(query)
    data = []
    for student in queryset:
        month_name = datetime.datetime.strptime(student.month, '%Y-%m').strftime('%B')
        student_data = {
            'classnum': student.classnum,
            'section': student.section,
            'month': month_name,  # Use month name instead of numeric value
            'present': student.present_count,
            'absent': student.absent_count
        }
        data.append(student_data)
    return Response(data)

@api_view(['POST'])
def user_check_api(request):
    data = request.data
    username = data.get('username', None)
    password = data.get('password', None)
    
    if username is None or password is None:
        return Response({'error': 'Both username and password are required'}, status=status.HTTP_400_BAD_REQUEST)
    
    
    if username == 'admin' and password == '1234':
        
        user = User(username=username, password=password)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    else:
        return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)
    

# @api_view(['GET'])
# def orm_view(request):
