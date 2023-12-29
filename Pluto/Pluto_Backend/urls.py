from django.urls import path
from . import views
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path("", views.index, name="index"),
    path("get_user/<str:username>", views.get_user, name="get_user"),
    path("graphql/", csrf_exempt(GraphQLView.as_view(graphiql=True))),
]