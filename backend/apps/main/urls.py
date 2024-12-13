from django.urls import path

from main.views.about import AboutDetailView
from main.views.category import CategoryListView, SubcategoryDetailView
from main.views.product import ProductListView, ProductDetailView
from main.views.news import NewsListView, NewsDetailView
from main.views.send_mail import send_test_email

urlpatterns = [
    path('category', CategoryListView.as_view(), name='category-list'),
    path('subcategory/<int:id>', SubcategoryDetailView.as_view(), name='subcategory-detail'),
    path('about/<int:id>', AboutDetailView.as_view(), name='about-detail'),
    path('product', ProductListView.as_view(), name='product-list'),
    path('product/<int:id>', ProductDetailView.as_view(), name='product'),
    path('news', NewsListView.as_view(), name='news-list'),
    path('news/<int:id>', NewsDetailView.as_view(), name='news'),
    path('send-mail', send_test_email, name='send-mail'),

]
