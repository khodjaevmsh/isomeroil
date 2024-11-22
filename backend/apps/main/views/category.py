from rest_framework import generics

from main.models import Category
from main.serializers.category import CategorySerializer


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
