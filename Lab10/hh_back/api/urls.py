from django.urls import path
from api.views import companies, company_detail, company_vacancies, vacancies, vacancy_detail, vacancies_top_ten

urlpatterns = [
    path('companies/', companies),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancies),

    path('vacancies/', vacancies),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten', vacancies_top_ten)
]