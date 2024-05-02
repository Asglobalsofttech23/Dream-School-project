# Generated by Django 5.0.4 on 2024-04-18 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0035_delete_attendancedetails'),
    ]

    operations = [
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('attendance', models.CharField(max_length=20)),
                ('standard', models.CharField(max_length=20)),
                ('section', models.CharField(max_length=20)),
                ('date', models.DateField()),
            ],
        ),
    ]