FROM nginx:alpine

# Nginx sert par défaut le contenu du dossier /usr/share/nginx/html
# On y copiera notre futur fichier index.html
WORKDIR /usr/share/nginx/html

COPY index.html .

EXPOSE 80