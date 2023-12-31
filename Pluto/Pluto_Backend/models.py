from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
# Create your models here.


class User(AbstractUser):
    bio = models.TextField(max_length=400, null=False, blank=False, default="Winky winky.. this user haven't set any bio yet.")
    profile_picture = models.URLField(null=False, blank=True, default="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg")
    friends = models.ManyToManyField("self", null=True, blank=True, related_name="friends_list")
    # There is already a prebuild field for this user model but we use this field instead
    timestamp = models.DateTimeField(default=timezone.now())

class Message(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="author")
    content = models.TextField(blank=True)
    reply = models.ForeignKey("self", on_delete=models.CASCADE, related_name="replying_message", null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)