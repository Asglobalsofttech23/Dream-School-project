from django.db import models

# Create your models here.
class students(models.Model):
    Std_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=40)
    age = models.IntegerField()
    Standard = models.IntegerField()
    section = models.CharField(max_length=10)

class ParentsDetails(models.Model):
    Std_id = models.ForeignKey(students, on_delete=models.CASCADE, related_name='parents')
    fathersname = models.CharField(max_length=40)
    mothersname = models.CharField(max_length=40)
    contact = models.CharField(max_length=10)
    address = models.TextField()

class Feesstatus(models.Model):
    Std_id = models.ForeignKey(students, on_delete=models.CASCADE)
    first_term_fee = models.IntegerField(null=True,default='-')
    second_term_fee = models.IntegerField(null=True,default='-')
    third_term_fee = models.IntegerField(null=True,default='-')
    bus_fee = models.IntegerField(null=True,default='-')
    extra_c_fee = models.IntegerField(null=True,default='-')
    pending = models.IntegerField(null=True,default='-') 


class Registration(models.Model):
    name = models.CharField(max_length=40)
    DOB = models.IntegerField(null=True)
    age = models.IntegerField(null=True)
    gender = models.CharField(max_length=40)
    fathers_name = models.CharField(max_length=40)
    mothers_name = models.CharField(max_length=40)
