# Generated by Django 4.2.4 on 2023-08-29 00:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Student",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("roll_no", models.IntegerField()),
                (
                    "assignment1",
                    models.CharField(
                        choices=[("yes", "Yes"), ("no", "No")],
                        default="no",
                        max_length=3,
                    ),
                ),
                (
                    "assignment2",
                    models.CharField(
                        choices=[("yes", "Yes"), ("no", "No")],
                        default="no",
                        max_length=3,
                    ),
                ),
                (
                    "assignment3",
                    models.CharField(
                        choices=[("yes", "Yes"), ("no", "No")],
                        default="no",
                        max_length=3,
                    ),
                ),
                (
                    "assignment4",
                    models.CharField(
                        choices=[("yes", "Yes"), ("no", "No")],
                        default="no",
                        max_length=3,
                    ),
                ),
                (
                    "assignment5",
                    models.CharField(
                        choices=[("yes", "Yes"), ("no", "No")],
                        default="no",
                        max_length=3,
                    ),
                ),
                (
                    "assignment6",
                    models.CharField(
                        choices=[("yes", "Yes"), ("no", "No")],
                        default="no",
                        max_length=3,
                    ),
                ),
            ],
        ),
        migrations.DeleteModel(
            name="ExcelRecord",
        ),
    ]
