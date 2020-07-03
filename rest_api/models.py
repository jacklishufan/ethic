from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Institution(models.Model):
    institution_id = models.AutoField(primary_key=True)
    name = models.TextField()
    code = models.TextField()
    def __str__(self):
        return self.code + " "+ self.name
class User(AbstractUser):
    institution = models.ForeignKey(Institution, on_delete=models.CASCADE,  blank=True,null=True)
    name = models.TextField(blank=True,null=True)
    permission_institution = models.BooleanField(default=False)
    permission_province = models.BooleanField(default=False)

class ApplicationEntry(models.Model):
    CREATED = 1
    SUBMITTED = 2
    PASSED_RD1 = 3
    PASSED_RD2 = 4
    FAILED_RD1 = 5
    FAILED_RD2 = 6
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    data = models.TextField()
    status = models.IntegerField()
    institution = models.ForeignKey(Institution, on_delete=models.CASCADE, blank=True, null=True)
    time = models.DateTimeField(auto_now_add=True,null=True)
    edit_time = models.DateTimeField(auto_now=True)

    @property
    def round(self):
        if self.status in [1,2,5]:
            return 1
        else:
            return 2

    def review(self,status):
        if status:
            if self.status in [2,5]:
                self.status = 3
            elif self.status in [3,6]:
                self.status = 4
        else:
            if self.status in [2]:
                self.status = 5
            elif self.status in [3]:
                self.status = 6
        self.save()

class Review(models.Model):
    PRIMARY = 1
    SECONDARY = 2
    reviewer = models.ForeignKey(User,on_delete=models.CASCADE,related_name="reviews")
    application = models.ForeignKey(ApplicationEntry,on_delete=models.CASCADE,related_name="reviews")
    comment = models.TextField(blank=True,null=True)
    round = models.IntegerField()
    passed = models.BooleanField()
    time = models.DateTimeField(auto_now_add=True)
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
