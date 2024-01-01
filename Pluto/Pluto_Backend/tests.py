from django.test import TestCase
from .models import *

# Create your tests here.
class TestUserModel(TestCase):

    def setUp(self):
        user1 = User.objects.create(
            username="TestUser1", 
            password="TestPassword1", 
            email="test1@email.com", 
            bio="Hello This is my bio!",
            profile_picture="https://pbs.twimg.com/media/EukdIubXIAMrq7M.jpg",
        )

        user2 = User.objects.create(
            username="TestUser2",
            password="TestPassword2",
            email="test2@email.com",
        )

        user1.friends.add(user2)       

    def test_user_fields(self):
        user1 = User.objects.get(username="TestUser1")
        user2 = User.objects.get(username="TestUser2")
        # Test password, email, bio, profile_picture and friends fields
        self.assertEqual(user1.password, "TestPassword1") 
        self.assertEqual(user1.email, "test1@email.com")
        self.assertEqual(user1.bio, "Hello This is my bio!")
        self.assertEqual(user1.profile_picture, "https://pbs.twimg.com/media/EukdIubXIAMrq7M.jpg")
        self.assertIn(user2, user1.friends.all())

class TestMessageModel(TestCase):

    def setUp(self):
        user1 = User.objects.create(username="TestUser1", password="TestPassword1", email="test1@email.com")

        user2 = User.objects.create(username="TestUser2", password="TestPassword2", email="test2@email.com")

        message1 = Message.objects.create(
            author = user1,
            content = "Test Message #1",
        )

        message2 = Message.objects.create(
            author = user1,
            content = "Test Message #2",
            reply = message1
        )

        message3 = Message.objects.create(
            author = user2,
            content= "Test Message #3",
            reply = message1
        )

    def test_message1(self):
        user1 = User.objects.get(username="TestUser1")
        message1 = Message.objects.get(id=1)
        self.assertEqual(message1.author, user1)
        self.assertEqual(message1.content, "Test Message #1")
        self.assertEqual(message1.reply, None)

    def test_message2(self):
        user1 = User.objects.get(username="TestUser1")
        message1 = Message.objects.get(id=1)
        message2 = Message.objects.get(id=2)
        self.assertEqual(message2.author, user1)
        self.assertEqual(message2.content, "Test Message #2")
        self.assertEqual(message2.reply, message1)
    
    def test_message3(self):
        user2 = User.objects.get(username="TestUser2")
        message1 = Message.objects.get(id=1)
        message3 = Message.objects.get(id=3)
        self.assertEqual(message3.author, user2)
        self.assertEqual(message3.content, "Test Message #3")
        self.assertEqual(message3.reply, message1)
