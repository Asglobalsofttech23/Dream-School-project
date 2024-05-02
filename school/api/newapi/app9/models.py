from django.db import models

# Create your models here.
class Tregistration(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    contact = models.CharField(max_length=10)
    address = models.TextField()
    def __str__(self):
        return self.name
        

class Subjects(models.Model):
    sub_id = models.IntegerField()
    subjectname = models.CharField(max_length=100)  
    T_id = models.ManyToManyField('Tregistration')
    
    
class Classes(models.Model):
    class_name = models.CharField(max_length=100)
    subjects = models.ManyToManyField('Subjects')

class Teaching(models.Model):
    teacher = models.ForeignKey('Tregistration', on_delete=models.CASCADE)
    subject = models.ForeignKey('Subjects', on_delete=models.CASCADE)
    class_info = models.ForeignKey('Classes', on_delete=models.CASCADE)