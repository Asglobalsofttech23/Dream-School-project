from app9.models import *
from rest_framework import serializers

class TregistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tregistration
        fields = '__all__'   


class TregistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tregistration
        fields = '__all__'      

class ClassesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = '__all__'              

class TeachingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teaching
        fields = '__all__'         