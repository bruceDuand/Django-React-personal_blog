# Generated by Django 2.1.1 on 2018-09-23 02:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='createDate',
            field=models.DateTimeField(auto_now_add=True, verbose_name='create time'),
        ),
    ]
