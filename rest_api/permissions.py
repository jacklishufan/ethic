from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.exceptions import PermissionDenied

def can_edit(user,app):
    return app.author == user and app.status==1

def can_view(user,app):
    con1 = user.permission_province
    con2 = user.permission_institution and \
           app.author.institution == app.author.institution
    con3 = app.author == user
    return con1 or con2 or con3

def can_review(user,app):
    con1 = user.permission_province
    con2 = user.permission_institution and \
           app.author.institution == app.author.institution
    return app.status>1 and (con1 or con2)

def has_institution_access(user):
    return user.permission_institution

def has_prov_access(user):
    return user.permission_province

def check_permission(func,*args):
    if not func(*args):
        raise PermissionDenied

class EditPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        return can_edit(request.user,obj)

class ReviewPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        return can_review(request.user,obj)

