# Generated by Django 4.2.7 on 2023-12-08 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0006_alter_review_count'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='serialized_array',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='review',
            name='class_average_marks',
            field=models.CharField(max_length=10),
        ),
    ]
