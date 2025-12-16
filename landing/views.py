from django.shortcuts import render


def index(request):
    """Главная страница лендинга"""
    return render(request, 'landing/index.html')


