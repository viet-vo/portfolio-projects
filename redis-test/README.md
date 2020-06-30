# Setup
## Creating and running a docker container runnign RabbitQL

```docker
docker run --name redis1 -p 6379:6379 -d redis redis-server --appendonly yes
```

# Working Notes
https://github.com/NodeRedis/node-redis#pubsub