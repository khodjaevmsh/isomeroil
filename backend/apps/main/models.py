from django.db import models
from django.utils import timezone


# Create your models here.

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, editable=False, null=True)
    updated_at = models.DateTimeField(auto_now=True, editable=False, null=True)

    class Meta:
        abstract = True


class Category(BaseModel):
    name = models.CharField(max_length=55)

    def __str__(self):
        return self.name


class Subcategory(BaseModel):
    category = models.ForeignKey('main.Category', related_name="subcategories", on_delete=models.CASCADE)
    name = models.CharField(max_length=55)

    def __str__(self):
        return self.name


class About(BaseModel):
    subcategory = models.ForeignKey('main.Subcategory', related_name="about", on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    established_date = models.DateField(null=True, blank=True)
    description = models.TextField()
    address = models.TextField(null=True, blank=True)
    phone = models.CharField(max_length=20, null=True)
    email = models.EmailField(null=True, blank=True)
    logo = models.ImageField(upload_to='company_logos/', default='default.png', null=True, blank=True)
    views = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name


class Product(models.Model):
    PRODUCT_TYPES = [
        ('gasoline', 'Автомобильные бензины'),
        ('diesel', 'Дизельное топливо'),
        ('black_oil', 'Мазут'),
        ('sulfur', 'Сера'),
        ('solvent', 'Углеводородный растворитель'),
    ]
    subcategory = models.ForeignKey('main.Subcategory', related_name="products", on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    product_type = models.CharField(max_length=50, choices=PRODUCT_TYPES)
    characteristics = models.TextField()
    release_date = models.DateField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    cover = models.ImageField(default='default.png', upload_to='products/cover')
    views = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.name} ({self.product_type})'

    def save(self, *args, **kwargs):
        if self.pk:
            original = Product.objects.get(pk=self.pk)
            if original.price != self.price:
                PriceHistory.objects.create(
                    product=self,
                    old_price=original.price,
                    new_price=self.price
                )
        super().save(*args, **kwargs)


class PriceHistory(BaseModel):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='price_history')
    old_price = models.DecimalField(max_digits=10, decimal_places=2)
    new_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.product.name} - {self.old_price} → {self.new_price}"


class News(BaseModel):
    subcategory = models.ForeignKey('main.Subcategory', related_name='subcategory', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    cover = models.ImageField(default='default.png', upload_to='news/cover')
    available = models.BooleanField(default=True)
    views = models.IntegerField(default=0)

    def __str__(self):
        return self.title
