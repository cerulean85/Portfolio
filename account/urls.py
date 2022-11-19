from django.urls import path, include
from . import views
# from rest_framework import urls
from rest_framework.routers import DefaultRouter


# router = DefaultRouter()
# router.register(r'post',views.PostViewSet)

urlpatterns =[
    # path('signup/', views.UserCreate.as_view()),
    # path('api-auth/', include('rest_framework.urls')),


    # path('login/', views.JWTLoginView.as_view()),
    # path('signup/', views.JWTSignupView.as_view()),

    # path("", include(router.urls)),
    path("register", views.RegisterAPIView.as_view()),  # 회원가입하기
    path("auth", views.AuthView.as_view()),  # 로그인하기

 ]