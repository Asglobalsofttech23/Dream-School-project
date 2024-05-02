from django.db import models

# Create your models here.
class Class(models.Model):
    st_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)


class Stddetails(models.Model):
    classnum = models.IntegerField()
    section = models.CharField(max_length=10)
    std_id = models.ForeignKey(Class, on_delete=models.CASCADE)
    attendance = models.CharField(max_length=10,null=True)
    date = models.DateField(null=True)


class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)


  