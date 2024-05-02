# Generated by Django 5.0.4 on 2024-04-18 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0041_alter_attendance_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='AttendanceDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('attendance', models.CharField(default='', max_length=100)),
                ('section', models.CharField(max_length=100)),
                ('date', models.DateField(blank=True, null=True)),
                ('standard', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Attendance',
        ),
    ]
