# Generated by Django 5.0.4 on 2024-04-21 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app4', '0002_stddetails_attendance'),
    ]

    operations = [
        migrations.AddField(
            model_name='stddetails',
            name='date',
            field=models.DateField(null=True),
        ),
    ]
