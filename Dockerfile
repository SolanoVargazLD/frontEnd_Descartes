# FROM node:14-alpine as build

# WORKDIR /app

# COPY package.json /

# RUN npm install

# COPY . .

# RUN npm run build --configuration=production

# ##################&
# FROM nginx:1.17.1-alpine as prod-stage

# COPY --from=build /app/dist/descartes-front-end- /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g","daemon off;"]
