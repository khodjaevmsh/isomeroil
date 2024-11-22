from rest_framework import serializers

from main.models import Category, Subcategory, Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all_'
