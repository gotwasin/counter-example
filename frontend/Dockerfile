FROM node:8.16.0-alpine

RUN mkdir -p /usr/app/
COPY . /usr/app
WORKDIR /usr/app

RUN npm install -g react-script
RUN npm install

ENV DANGEROUSLY_DISABLE_HOST_CHECK=true
EXPOSE 3000

CMD [ "npm", "run" , "start" ]

