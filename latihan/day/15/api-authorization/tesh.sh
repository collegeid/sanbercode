curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{

  "email": "momon@mail.com",
  "fullName": "Momon Kentang",
  "password": "12341234",
  "username": "momonkentang",
  "role": ["user"]

}'


curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "momon@mail.com",
  "password": "12341234"
}'

curl -X GET http://localhost:3000/api/auth/me \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWNlYjZhZWY3NzQ2N2JiNTA5NzZjYiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzIyNjA4NTE1LCJleHAiOjE3MjI2MzAxMTV9.HdQrQLSnPLAjaNO8SKKj0T6x2WozfN8CI-kjFCJzkiU"



