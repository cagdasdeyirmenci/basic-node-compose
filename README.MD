### Basic docker compose file including three node services

Two web service returns text

One web service fetches data from other two

---
On the root folder
```
docker-compose build
```
then

```
docker-compose up
```
---
``
curl http://<url>:8082
``

``
curl http://<url>:8082/1
``

``
curl http://<url>:8082/2
``