# Generated by Django 5.0.4 on 2024-04-17 11:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app2', '0005_rename_subject_subjects_subject_name'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Subjects',
            new_name='Subject',
        ),
        migrations.RenameField(
            model_name='subject',
            old_name='subject_name',
            new_name='subjectname',
        ),
    ]
