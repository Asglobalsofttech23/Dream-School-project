# Generated by Django 5.0.4 on 2024-04-23 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app4', '0003_stddetails_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=100)),
            ],
        ),
    ]
