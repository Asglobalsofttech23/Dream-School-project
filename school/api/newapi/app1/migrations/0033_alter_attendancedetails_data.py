# Generated by Django 5.0.4 on 2024-04-18 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0032_alter_attendancedetails_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendancedetails',
            name='data',
            field=models.DateField(blank=True, null=True),
        ),
    ]
