from app8.models import *
from rest_framework import serializers

class studentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = students
        fields = '__all__'   


class ParentsDetailsSerializer(serializers.ModelSerializer):
    # std_id = studentsSerializer
    class Meta:
        model = ParentsDetails
        fields = '__all__'          

class FeesstatusSerializer(serializers.ModelSerializer):
    # std_id = studentsSerializer
    class Meta:
        model = Feesstatus
        fields = '__all__' 