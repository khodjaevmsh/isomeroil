from rest_framework import generics

from main.models import Product
from main.serializers.product import ProductSerializer


class ProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        subcategory = self.request.query_params.get('subcategory')
        if subcategory:
            return Product.objects.filter(subcategory=subcategory)
        return Product.objects.all()


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'

    def get_object(self):
        obj = super().get_object()

        obj.views += 1
        obj.save()

        return obj
