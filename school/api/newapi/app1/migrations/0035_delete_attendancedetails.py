# Generated by Django 5.0.4 on 2024-04-18 11:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0034_rename_data_attendancedetails_date'),
    ]

    operations = [
        migrations.DeleteModel(
            name='AttendanceDetails',
        ),
    ]