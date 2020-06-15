For Windows 10 Home Enviroment, the Docker Toolbox App does not connect to local applications as easy as supported Docker Apps for compatible OSs

Primary Objective: To add a central chat channel for a web application

# Setup
## Creating and running a docker container runnign RabbitQL
```docker
docker run -d --hostname my-rabbit -p 5672:5672 --name some-rabbit rabbitmq:3
```

## Creating a .env file to contain the address of the container
```terminal
echo 'RABBITMQ=5672' >.env
```