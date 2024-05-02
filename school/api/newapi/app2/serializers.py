from app2.models import *
from rest_framework import serializers

class TeachersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teachers
        fields = '__all__'


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'        


class AttendanceDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AttendanceDetails
        fields = '__all__'        