import graphene
from graphene_django import DjangoObjectType, DjangoListField

from .models import *

class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = ("id", "username", "email", "bio", "timestamp", "friends", "profile_picture")

class MessageType(DjangoObjectType):
    class Meta:
        model = Message
        fields = ("id", "author", "content", "reply", "timestamp")

class HubType(DjangoObjectType):
    class Meta:
        model = Hub
        fields = ("owner", "name" ,"description", "hub_icon", "admins", "members", "timestamp")
    
class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)
    all_messages = graphene.List(MessageType)
    all_hubs_of_user = graphene.List(HubType, member=graphene.String())
    user = graphene.Field(UserType, id=graphene.Int(), username=graphene.String(), email=graphene.String())
    message = graphene.Field(MessageType, id=graphene.Int())
    hub = graphene.Field(HubType, id=graphene.Int())

    def resolve_all_users(root, info): return User.objects.all()
    def resolve_all_messages(root, info): return Message.objects.all()
    def resolve_all_hubs_of_user(root, info, member):
        if member == "currentUser": member = info.context.user.username 
        member = User.objects.get(username=member)
        hubs = Hub.objects.filter(members=member)
        hubs = hubs.order_by("-timestamp").all()
        return hubs
    def resolve_user(root, info, id=None, username=None, email=None): 
        if id: return User.objects.get(id=id)
        if username: 
            if username == "currentUser": return User.objects.get(username=info.context.user.username)
            else: return User.objects.get(username=username)
        if email: return User.objects.get(email=email)
        return None
    def resolve_message(root, info, id):
        if id: return Message.objects.get(id=id)
        return None
    def resolve_hub(root, info, id=None):
        if id: return Hub.objects.get(id=id)
        return None
    
    
schema = graphene.Schema(query=Query)   