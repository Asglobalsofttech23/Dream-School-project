from rest_framework import serializers
from app1.models import *


class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = '__all__'


class FeesdetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feesdetails
        fields = '__all__'      


class ExaminationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Examination
        fields = '__all__'            