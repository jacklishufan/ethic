from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Institution(models.Model):
    institution_id = models.AutoField(primary_key=True)
    name = models.TextField()
    code = models.TextField()
    permission_institution = models.BooleanField(default=False)
    permission_province = models.BooleanField(default=False)

class User(AbstractUser):
    institution = models.ForeignKey(Institution, on_delete=models.CASCADE,  blank=True)


# class ApplicationEntry(models.Model):
#
#     class Status(models.IntegerChoices):
#         CREATED = 1, _('Drafted')
#         SUBMITTED = 2, _('Submitted')
#         PASSED_RD1 = 3, _('Passed First Round')
#         PASSED_RD2 = 4, _('Passed Second Round')
#         FAILED_RD1 = 5, _('Failed First Round')
#         FAILED_RD2 = 6, _('Failed Second Round')
#
#     application_id = models.AutoField(primary_key=True)
#     institution = models.ForeignKey(Institution, on_delete=models.CASCADE,  blank=True, null=True)
#     author = models.ForeignKey(User, on_delete=models.CASCADE,blank=True,null=True)
#     status = models.IntegerField(choices=Status)
#
# class ApplicationDetail(models.Model):
#     protocol_title = models.TextField()
#     protocol_title = models.TextField()
#     fund_source = models.TextField()
#     fund_source = models.TextField()
#     applicant = models.TextField()
#     title = models.TextField()
