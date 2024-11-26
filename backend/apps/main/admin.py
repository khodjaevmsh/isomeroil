from django.contrib import admin

from main.models import Category, Subcategory, News, About, Product, PriceHistory


# Register your models here.

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Subcategory)
class SubcategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        # Запрещаем создание новых объектов
        return About.objects.count() == 0

    def has_delete_permission(self, request, obj=None):
        # Запрещаем удаление записи
        return False


class PriceHistoryInline(admin.TabularInline):
    model = PriceHistory
    extra = 0

    def has_delete_permission(self, request, obj=None):
        # Запрещаем удаление записи
        return False


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')
    inlines = [PriceHistoryInline]


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    pass
