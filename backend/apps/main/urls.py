from django.urls import path

from main.views.about import AboutDetailView
from main.views.category import CategoryListView, SubcategoryDetailView
from main.views.product import ProductListView, ProductDetailView

urlpatterns = [
    path('category', CategoryListView.as_view(), name='category-list'),
    path('subcategory/<int:id>', SubcategoryDetailView.as_view(), name='subcategory-detail'),
    path('about/<int:id>', AboutDetailView.as_view(), name='about-detail'),
    path('product', ProductListView.as_view(), name='product-list'),
    path('product/<int:id>', ProductDetailView.as_view(), name='product'),
]
