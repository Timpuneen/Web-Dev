from django.db import models

class Product(models.Model):
    name=models.CharField(max_length=255)
    price=models.FloatField(default=1000)
    description=models.TextField(default='')
    count=models.IntegerField(default=0)
    is_active=models.BooleanField()
    category=models.CharField(max_length=255)

    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'category': self.category
        }

class Category(models.Model):
    name=models.CharField(max_length=255)
    def to_json(self):
        return{
            'id': self.id,
            'name': self.name
        }
