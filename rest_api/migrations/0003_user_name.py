# Generated by Django 3.0.6 on 2020-07-02 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0002_auto_20200702_0753'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='name',
            field=models.TextField(blank=True, null=True),
        ),
    ]
