# Generated by Django 3.0.6 on 2020-07-02 07:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='institution',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='rest_api.Institution'),
        ),
    ]
