from django.db import models

# Create your models here.
class Teachers(models.Model):
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=100)
    subject = models.CharField(max_length=100, default='')
    address = models.CharField(max_length=200)
    
class Subject(models.Model):
    subjectname = models.CharField(max_length=100)


class AttendanceDetails(models.Model):
    name = models.CharField(max_length=100)
    attendance = models.CharField(max_length=100)
    section = models.CharField(max_length=100)
    date = models.DateField()
    standard = models.IntegerField()
    