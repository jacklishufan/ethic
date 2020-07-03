from django.contrib import admin
from rest_api.models import *
# Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import *



class CustomUserAdmin(UserAdmin):
    model = User
    fieldsets = (
        (None, {'fields': ('name', 'institution','permission_province','permission_institution')}),
    ) + UserAdmin.fieldsets
    add_fieldsets = (
        (None, {'fields': ('name', 'institution','permission_province','permission_institution')}),
    ) + UserAdmin.add_fieldsets
admin.site.register(User,CustomUserAdmin)

admin.site.register(Institution)
