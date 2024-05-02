# Generated by Django 5.0.4 on 2024-04-17 10:10

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0016_alter_attendance_class_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='Classes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('class_number', models.IntegerField(default=0)),
            ],
        ),
        migrations.RemoveField(
            model_name='attendance',
            name='class_number',
        ),
        migrations.AddField(
            model_name='attendance',
            name='classes',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='app1.classes'),
        ),
    ]
