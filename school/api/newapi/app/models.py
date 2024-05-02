from django.db import models

# Create your models here.

class Students(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    section = models.CharField(max_length=10)
    contact = models.CharField(max_length=20)

