# Generated by Django 5.1.3 on 2024-11-25 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_product_views'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='cover',
            field=models.ImageField(default='default-image.png', upload_to='products/cover'),
        ),
    ]