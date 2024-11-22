from django.urls import path

from main.views.about import AboutDetailView
from main.views.category import CategoryListView

urlpatterns = [
    path('category', CategoryListView.as_view(), name='category'),
    path('about/<int:id>', AboutDetailView.as_view(), name='about-detail'),
]
