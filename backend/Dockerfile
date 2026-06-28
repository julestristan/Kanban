FROM node:20-alpine

WORKDIR /usr/src/app

# Étape A: On copie d'abord UNIQUEMENT les fichiers de dépendances
COPY package*.json ./

# Étape B: On installe les dépendances (Docker mettra cette étape en cache)
RUN npm install --production

# Étape C: On copie le reste du code (server.js)
COPY server.js .

EXPOSE 8000

CMD ["node", "server.js"]