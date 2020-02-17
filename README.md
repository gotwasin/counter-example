Getting Start

1. change backend's env in docker-compose that connect to redis

environment:
  - REDIS_HOSTNAME=redis

2. change proxy into frontend/package.json

"proxy": "http://backend_web_counter:5000"

3.  Run docker-compose

docker-compose up -d