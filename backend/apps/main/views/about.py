from rest_framework import generics

from main.models import About
from main.serializers.about import AboutSerializer


class AboutDetailView(generics.RetrieveAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer
    lookup_field = 'id'

    def get_object(self):
        obj = super().get_object()

        obj.views += 1
        obj.save()

        return obj
