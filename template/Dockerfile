# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.17.3-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=build /app/build /usr/share/nginx/html

RUN chgrp -R 0 /usr/share/nginx && \
  chmod -R g=u /usr/share/nginx && \
  chgrp -R 0 /var/cache/nginx && \
  chmod -R g=u /var/cache/nginx && \
  chgrp -R 0 /var/run && \
  chmod -R g=u /var/run && \
  chmod -R 775 /usr/share/nginx/html

USER www-data

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
