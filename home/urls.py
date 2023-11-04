# myapp/urls.py
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.index, name='index'),
    path('students/', views.student_list, name='student_list'),
    path('students/create/', views.student_create, name='student_create'),
    path('students/<str:roll_no>/update/', views.student_update, name='student_update'),
    path('students/<str:roll_no>/delete/', views.student_delete, name='student_delete'),
    path('search/', views.student_search, name='student_search'),
    path('login/', views.login_view, name='login'),
    path("validate_login/", views.validate_login, name="validate_login"),
    path("logout/", views.LogoutPage, name="logout"),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
