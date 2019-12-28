FROM node:latest

WORKDIR /app

RUN npm install -g nodemon mocha supervisor

EXPOSE 8080

CMD ["sh", "start.sh"]
