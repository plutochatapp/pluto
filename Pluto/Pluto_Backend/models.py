from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class User(AbstractUser):
    pass

class SampleModel(models.Model):
    sample_text = models.TextField(max_length=2000)

    def __str__(self):
        return self.sample_text