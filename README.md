{
"login_id": "test11",
"email": "test11@test.com",
"password": "1234"
}


{
"login_id": "test11",
"password": "1234"
}


pip install django
django-admin startproject Portfolio .
pip install djangorestframework

python manage.py startapp project
python manage.py startapp account

python manage.py makemigrations
python manage.py migrate
python manage.py runserver


Portfolio
- project
- account

project의 urls.py에서 account의 urls.py의 url을 routing
project의 settings.py에 DRF 및 JWT 등 각종 설정을 추가함
project의 settings.py의 INSTALLED_APPS에 하위 프로젝트 추가



### DRF와 django 차이
- https://dawnpast12.tistory.com/entry/DRF-%EC%9E%A5%EA%B3%A0-REST-Framework%EB%9E%80-%EA%B7%B8%EB%A6%AC%EA%B3%A0-Serialization

### APIView, Mixins, generics APIView, ViewSet 정리 필요
- https://ssungkang.tistory.com/entry/Django-APIView-Mixins-generics-APIView-ViewSet%EC%9D%84-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90
- https://velog.io/@poiuyy0420/DRF%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-API-%EB%A7%8C%EB%93%A4%EA%B8%B0-APIView

### JWT 인증 설명
https://tansfil.tistory.com/59

### Simple JWT는 아래 블로그 참고함 (소스코드 전체가 IMPROT 관련하여 여기저기 좀 뒤짐)
- https://velog.io/@chaeri93/DRF-Simple-jwt%EB%A1%9C-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5


