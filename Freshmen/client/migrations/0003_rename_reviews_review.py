# Generated by Django 4.2.7 on 2023-12-01 05:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0002_reviews_desc'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Reviews',
            new_name='Review',
        ),
    ]