"""Ethics URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_api.views import *
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', LandingView.as_view()),
    path('login/', UserLoginView.as_view()),
    path('logout/', UserLogOutView.as_view()),
    path('view/', AppReviewView.as_view()),
    path('list/', AppListView.as_view()),
    path('api/v1/apps/', AppListAPIView.as_view()),
    path('api/v1/apps/datatable/', AppListDataTableAPIView.as_view()),
    path('api/v1/reviews/datatable/', AppReviewDataListAPiView.as_view()),
    path('api/v1/create_app/', CreateFormView.as_view()),
    path('api/v1/update_app/', UpdateFormView.as_view()),
    path('api/v1/review_app/', ReviewFormView.as_view()),

]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
