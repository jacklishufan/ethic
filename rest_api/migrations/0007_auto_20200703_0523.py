# Generated by Django 3.0.6 on 2020-07-03 05:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0006_auto_20200703_0454'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='institution',
            name='permission_institution',
        ),
        migrations.RemoveField(
            model_name='institution',
            name='permission_province',
        ),
        migrations.AddField(
            model_name='user',
            name='permission_institution',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='permission_province',
            field=models.BooleanField(default=False),
        ),
    ]
