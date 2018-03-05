from rest_framework import serializers
from app.models import Contact


class AddressesField(serializers.ListField):
    child = serializers.CharField(max_length=100)


class EmailsField(serializers.ListField):
    child = serializers.EmailField()


class PhoneNumbersField(serializers.ListField):
    child = serializers.IntegerField()


class ContactSerializer(serializers.ModelSerializer):
    addresses = AddressesField(default=[])
    email_addresses = EmailsField(min_length=1)
    phone_numbers = PhoneNumbersField(min_length=1)

    class Meta:
        model = Contact
        fields = ('first_name', 'last_name', 'dob', 'addresses',
                  'email_addresses', 'phone_numbers', 'id')
