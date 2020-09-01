# Docker + Node.js

Dockerize a Node.js app - a simple demo running Node.js on Docker.

## Common Docker Commands:

`docker ps` - gives you the list of all of the running containers on your system.

`docker build -t usernameFromDockerHub/demoapp:1.0 .` - for creating a new docker image.

`docker run imageIdOrImageTagName` - to containerize your application.

`docker run -p localPortNumber:containerPortNumber imageIdOrImageTagName` - to run it locally, use port forwarding.

`docker volume create shared-stuff` - to create volumes.

`docker compose up` - to run all Docker containers together.

`docker compose down` - to shut down all the containers together.

`docker push` - shares your images to the Docker Hub registry or to a self-hosted one.

`docker pull - a` - downloads all tagged images from the repository.
