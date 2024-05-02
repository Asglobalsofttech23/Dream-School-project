from app4.models import *
from rest_framework import serializers

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'   


class StddetailsSerializer(serializers.ModelSerializer):
    std_id = ClassSerializer
    class Meta:
        model = Stddetails
        fields = '__all__'          

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']