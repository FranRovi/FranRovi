# Generated by Django 2.2.4 on 2021-03-04 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0007_auto_20210304_2108'),
    ]

    operations = [
        migrations.RenameField(
            model_name='severance',
            old_name='relation_duration',
            new_name='relation_duration_days',
        ),
        migrations.AddField(
            model_name='severance',
            name='relation_duration_months',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='severance',
            name='relation_duration_years',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='severance',
            name='total_relation_duration',
            field=models.IntegerField(null=True),
        ),
    ]
