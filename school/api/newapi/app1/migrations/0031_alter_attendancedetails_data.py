# Generated by Django 5.0.4 on 2024-04-18 10:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0030_attendancedetails_delete_attendance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendancedetails',
            name='data',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
