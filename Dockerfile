#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
run ls
RUN npm install
RUN npm run build

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/root_frontend /usr/share/nginx/html
COPY --from=node /app/nginx.conf /etc/nginx/conf.d/default.conf
RUN cat  /etc/nginx/conf.d/default.conf