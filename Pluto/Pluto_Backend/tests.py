from django.test import TestCase
from .models import SampleModel

# Create your tests here.
class TestSampleModel(TestCase):

    def setUp(self):
        SampleModel.objects.create(sample_text="Hello world!")

    def test_sample(self):
        self.assertEqual(True, True)