# Generated by Django 5.0.4 on 2024-04-17 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0017_classes_remove_attendance_class_number_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='attendance',
            name='classes',
        ),
        migrations.AddField(
            model_name='attendance',
            name='class_name',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.DeleteModel(
            name='Classes',
        ),
    ]
