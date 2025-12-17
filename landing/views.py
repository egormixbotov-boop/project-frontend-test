from django.shortcuts import render
from django.conf import settings


def index(request):
    """Главная страница лендинга"""
    context = {
        'telegram_username': getattr(settings, 'TELEGRAM_USERNAME', 'username'),
    }
    return render(request, 'landing/index.html', context)


