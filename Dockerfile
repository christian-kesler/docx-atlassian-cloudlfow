FROM node:16.16.0

WORKDIR /src

RUN npm install

COPY /src .

EXPOSE 3000/tcp

CMD ['node', 'index.js']