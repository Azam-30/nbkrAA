# Generated by Django 4.2.4 on 2023-08-29 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0002_student_delete_excelrecord"),
    ]

    operations = [
        migrations.AlterField(
            model_name="student",
            name="id",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
