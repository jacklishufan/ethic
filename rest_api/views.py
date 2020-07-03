from django.shortcuts import render
from django.views.generic import View
from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from django.contrib.auth import logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, mixins
from rest_api.serializers import *
from rest_api.models import *
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
import json
from .permissions import *
# Create your views here.

class UserLoginView(View):
    def get(self, request, *args, **kwargs):
        self.context ={}
        return render(request, 'login.html', context=self.context)

    def post(self, request, *args, **kwargs):
        next_url = request.GET.get("next")
        username = request.POST.get("username")
        remember = request.POST.get("remember")
        pwd = request.POST.get("password")
        user_obj = auth.authenticate(request, username=username, password=pwd)
        if user_obj:
            auth.login(request, user_obj)  # 给该次请求设置了session数据，并在响应中回写cookie
            if not remember:
                self.request.session.set_expiry(0)
            if next_url:
                return redirect(next_url)
            else:
                return redirect("/")
        else:
            # 用户名或密码错误
            return render(request, "login.html", {"error_msg": "用户名或密码错误"})

class UserLogOutView(View):
    def get(self, request, *args, **kwargs):
        logout(request)
        return redirect('/')

class LandingView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        user_info = {
            "name": request.user.name,
            "institutional_admin": request.user.permission_institution,
            "provincial_admin": request.user.permission_province,
            "institution": request.user.institution.name,
        }
        self.context = {
            "user_info": json.dumps(user_info),
            'page_header': "创建伦理申请"
        }
        print(self.context)
        # self.context['companies'] = Company.objects.all().order_by("name")
        return render(request, 'base.html', context=self.context)

class CreateFormView(APIView):

    def post(self, request, *args, **kwargs):
        json_data = request.data
        new_app = ApplicationEntry.objects.create(author=request.user,data=json_data['data'],status=ApplicationEntry.CREATED)
        response_data = {
            'next_page':'/view/?uid={}&edit=true'.format(new_app.id),
            'success':1,
        }
        return Response(response_data)

class UpdateFormView(APIView):
    permission_classes = [EditPermission]
    def post(self, request, *args, **kwargs):
        json_data = request.data
        uid = request.GET.get('uid')
        old_app = ApplicationEntry.objects.get(id=uid)
        self.check_object_permissions(request,old_app)
        old_app.data = json_data['data']
        old_app.status = json_data['status']
        old_app.save()
        return Response({"messege":"success"},200)


class AppListAPIView(generics.ListAPIView):
    serializer_class = AppSerialzer
    def get_queryset(self):
        return ApplicationEntry.objects.all()

class AppListDataTableAPIView(APIView):
    def get(self, request, *args, **kwargs):
        qs = ApplicationEntry.objects.filter()
        scope = request.GET.get('scope')
        status = request.GET.get('status')
        if scope =='institution':
            qs = qs.filter(status__gt=1)
            qs = qs.filter(author__institution=request.user.institution)
        elif scope =='province':
            qs = qs.filter(status__gt=1)
            pass
        else:
            qs = qs.filter(author=request.user)
        print(status)
        if status:
            qs = qs.filter(status=status)
        data = []
        for app in qs:
            item = AppSerialzer(app).data
            app_form = json.loads(item.pop('data'))
            item['title'] = app_form['protocal_title_cn']
            item['can_edit'] = can_edit(request.user,app)
            data.append(item)
        return Response(data)


class AppReviewView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        self.context = {}
        uid = request.GET.get('uid')
        edit = request.GET.get('edit')
        review = request.GET.get('review')
        showreview = request.GET.get('showreview')
        application = ApplicationEntry.objects.get(id=uid)
        permission = {
                "edit":False,
                "review":False,
                "showreview":False
        }
        page_header = '查看伦理申请'
        if edit:
            check_permission(can_edit,request.user,application)
            permission['edit']=True
            page_header = '编辑伦理申请'
        elif review:
            check_permission(can_review, request.user, application)
            permission['review'] = True
            permission['showreview'] = True
            page_header = '审核伦理申请'
        elif showreview:
            check_permission(can_review, request.user, application)
            permission['showreview'] = True
            page_header = '查看伦理审核'
        else:
            check_permission(can_view, request.user, application)
        user_info = {
            "name": request.user.name,
            "institutional_admin": request.user.permission_institution,
            "provincial_admin": request.user.permission_province,
            "institution": request.user.institution.name,
        }
        self.context = {
            "user_info":json.dumps(user_info),
            "form_data":application.data,
            "permission":json.dumps(permission),
            "uid":uid,
            "status":application.status,
            'page_header': page_header
        }
        print(self.context)
        return render(request, 'view.html', context=self.context)

class AppListView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        scope = request.GET.get('scope')
        status = request.GET.get('status')
        user_info = {
            "name": request.user.name,
            "institutional_admin": request.user.permission_institution,
            "provincial_admin": request.user.permission_province,
            "institution": request.user.institution.name,
        }
        self.context = {
            "user_info": json.dumps(user_info),
            "mode":"showreview",
            "status":0,
            'page_header':'列表页'
        }

        if scope:
            if scope=="institution":
                check_permission(has_institution_access,request.user)
                self.context['scope']="institution"
            elif scope == "province":
                check_permission(has_prov_access, request.user)
                self.context['scope'] = "province"
            else:
                self.context['scope'] = "self"
                self.context['mode'] = "edit"
            if status:
                self.context['status'] = status
                self.context['mode'] ='review'
        else:
            self.context['scope'] = "self"
            self.context['mode'] = "edit"
        print(self.context['scope'])
        return render(request, 'show_list.html', context=self.context)


class AppReviewDataListAPiView(APIView):
    def get(self, request, *args, **kwargs):
        uid = request.GET.get('uid')
        app = ApplicationEntry.objects.get(id=uid)
        check_permission(can_review,request.user,app)
        reviews = app.reviews.all()
        data = [AppReviewSerializer(review).data for review in reviews]
        return Response(data)

class ReviewFormView(APIView):
    permission_classes = [ReviewPermission]
    def post(self, request, *args, **kwargs):
        json_data = request.data
        uid = request.GET.get('uid')
        old_app = ApplicationEntry.objects.get(id=uid)
        self.check_object_permissions(request,old_app)
        comment = json_data['comment']['text']
        passed = json_data['comment']['value']
        round = old_app.round
        print(passed)
        old_app.review(passed)
        old_app.save()
        Review.objects.create(
            reviewer=request.user,
            application=old_app,
            comment=comment,
            passed=passed,
            round=round
        )
        return Response({"messege":"success"},200)


