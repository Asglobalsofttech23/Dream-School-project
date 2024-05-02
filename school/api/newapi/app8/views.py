from django.shortcuts import render
from app8.models import *
from app8.serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import json


@api_view(['GET', 'POST'])
def ParentView(request):
    if request.method == 'GET':
        datas = students.objects.all()
        serializer =studentsSerializer(datas, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = studentsSerializer(data=data)
        print("Request data:", request.data)  
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 


@api_view(['GET'])
def fees_join(request):
    query = '''
        SELECT app8_students.Std_id, app8_students.name, app8_students.Standard, app8_students.section, 
        app8_ParentsDetails.fathersname, app8_ParentsDetails.contact, app8_ParentsDetails.address, 
        app8_Feesstatus.first_term_fee, app8_Feesstatus.second_term_fee, app8_Feesstatus.third_term_fee, 
        app8_Feesstatus.bus_fee, app8_Feesstatus.extra_c_fee, app8_Feesstatus.pending
        FROM app8_students
        INNER JOIN app8_ParentsDetails ON app8_students.Std_id = app8_ParentsDetails.std_id_id
        INNER JOIN app8_Feesstatus ON app8_students.Std_id = app8_Feesstatus.std_id_id
        
    '''
    queryset = students.objects.raw(query)
    data = []
    for student in queryset:

        student_data = {
            'name': student.name,
            'class': student.Standard,
            'section': student.section,
            'fathersname': student.fathersname,
            'contact': student.contact,
            'address': student.name,
            'first_term_fee': student.first_term_fee,
            'second_term_fee': student.second_term_fee,
            'third_term_fee': student.third_term_fee,
            'bus_fee': student.bus_fee,
            'extra_c_fee': student.extra_c_fee,
            'pending': student.pending
        }
        data.append(student_data)
    return Response(data)