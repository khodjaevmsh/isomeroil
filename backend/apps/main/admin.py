from django.contrib import admin

from main.models import Category, Subcategory, News, About


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


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    pass
