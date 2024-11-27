from rest_framework import generics

from main.models import News
from main.serializers.news import NewsSerializer


class NewsListView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class NewsDetailView(generics.RetrieveAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    lookup_field = 'id'

    def get_object(self):
        obj = super().get_object()

        obj.views += 1
        obj.save()

        return obj

