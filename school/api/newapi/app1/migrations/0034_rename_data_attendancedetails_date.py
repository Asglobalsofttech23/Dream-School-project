# Generated by Django 5.0.4 on 2024-04-18 11:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0033_alter_attendancedetails_data'),
    ]

    operations = [
        migrations.RenameField(
            model_name='attendancedetails',
            old_name='data',
            new_name='date',
        ),
    ]