from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product, Category
# urlpatterns = [
#     path('products/', views.products_list),
#     path('products/<int:id>/', views.product_detail),
#     path('categories/', views.categories_list),
#     path('categories/<int:id>/', views.category_detail),
#     path('categories/<int:id>/products/', views.category_products_list),
# ]
def product_list(reauest):
    products = Product.objects.all()
    products_json=[p.to_json() for p in products]
    return JsonResponse(products_json,safe=False)

def product_detail(request,id):
    products = Product.objects.all()
    products_json=[p.to_json() for p in products]
    for pj in products_json:
        if pj['id'] == id:
            return JsonResponse(pj)
    return JsonResponse({'Error':'No such Product!'})

def category_list(request):
    categories = Category.objects.all()
    categories_json=[p.to_json() for p in categories]
    return JsonResponse(categories_json,safe=False)

def category_detail(request,id):
    categories = Category.objects.all()
    categories_json=[p.to_json() for p in categories]
    for ct in categories_json:
        if ct['id'] == id:
            return JsonResponse(ct)
    return JsonResponse({'Error':'No such Category!'})

def category_product_list(request,id):
    products = Product.objects.all()
    products_json=[p.to_json() for p in products]
    categories = Category.objects.all()
    categories_json=[p.to_json() for p in categories]
    for cj in categories_json:
        if cj['id'] == id:
            for pj in products_json:
                if pj['category'] == cj['name']:
                    return JsonResponse(pj)
    return JsonResponse({'Error':'products of such category not found!'})

def save_json(request):
    if request.method=='POST':
        payload=Json.loads(request.body)