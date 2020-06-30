from django.shortcuts import render
from django.views.generic import View
# Create your views here.

class UserActionLogView(View):
    def get(self, request, *args, **kwargs):
        self.context = {}
        # self.context['companies'] = Company.objects.all().order_by("name")
        return render(request, 'base.html', context=self.context)
