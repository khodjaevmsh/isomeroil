from rest_framework import generics

from main.models import Product
from main.serializers.product import ProductSerializer


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
