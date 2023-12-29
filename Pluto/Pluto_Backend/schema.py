import graphene
from graphene_django import DjangoObjectType

from .models import SampleModel

class SampleType(DjangoObjectType):
    class Meta:
        model = SampleModel
        fields = "__all__"

class Query(graphene.ObjectType):
    all_samples = graphene.List(SampleType)

    def resolve_all_samples(root, info):
        return SampleModel.objects.all()
    
schema = graphene.Schema(query=Query)   