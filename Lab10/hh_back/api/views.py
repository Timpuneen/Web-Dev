from django.shortcuts import render

from api.serializers import CompanySerializer, VacancySerializer
from api.models import Company, Vacancy
from django.http.response import JsonResponse
# Create your views here.

def companies(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)

def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error' : str(e)}, status = 400)
    
    serializer = CompanySerializer(company)
    return JsonResponse(serializer.data, safe=False)

def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error' : str(e)}, status = 400)
    
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def vacancies(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id = id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error" : str(e)}, status = 400)
    
    serializer = VacancySerializer(vacancy)
    return JsonResponse(serializer.data)

def vacancies_top_ten(request):
    vacancies = Vacancy.objects.order_by('salary')[:10]

    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

# Create your views here.
