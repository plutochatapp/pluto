from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def index(request):
    return render(request, 'base.html')

def get_data(request):
    return JsonResponse({"success": True}, safe=False)