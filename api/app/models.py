# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.postgres.fields import ArrayField


class Contact(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    dob = models.DateField()
    email_addresses = ArrayField(
        models.EmailField()
    )
    addresses = ArrayField(models.CharField(max_length=100))
    phone_numbers = ArrayField(models.IntegerField())
