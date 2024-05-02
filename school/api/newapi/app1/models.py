from django.db import models

# Create your models here.
class Members(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    grade = models.CharField(max_length=10)
    


class Feesdetails(models.Model):
    studentName = models.CharField(max_length=100)
    className = models.CharField(max_length=100)
    date = models.DateField()
    amount = models.IntegerField()

class Examination(models.Model):
    subject = models.CharField(max_length=100,null=True)
    date = models.DateField()
    class1 = models.DateTimeField(null=True)
    class2 = models.DateTimeField(null=True)
    class3 = models.DateTimeField(null=True)
    class4 = models.DateTimeField(null=True)
    class5 = models.DateTimeField(null=True)
    class6 = models.DateTimeField(null=True)
    class7 = models.DateTimeField(null=True)
    class8 = models.DateTimeField(null=True)
    class9 = models.DateTimeField(null=True)
    class10 = models.DateTimeField(null=True)



