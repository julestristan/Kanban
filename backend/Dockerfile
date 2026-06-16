FROM node:20-alpine

WORKDIR /usr/src/app

# On crée un package.json à la volée et on installe les dépendances
RUN npm init -y && npm install express cors

COPY server.js .

EXPOSE 8000

CMD ["node", "server.js"]