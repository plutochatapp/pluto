from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def index(request):
    return render(request, 'base.html')

def get_user(request, username):
    if request.method == 'GET':
        if username == 'currentUser':
            return JsonResponse("Hello", safe=False)
        else:
            return JsonResponse("Bye", safe=False)
