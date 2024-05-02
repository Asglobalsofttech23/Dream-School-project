from rest_framework import serializers
from app.models import Students

class StudentsSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=100)
    section = serializers.CharField(max_length=10)
    contact = serializers.CharField(max_length=20)

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = ['id', 'name', 'section', 'contact']    