# Builder

FROM node:12-alpine as builder

WORKDIR /temp

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . /temp

RUN yarn build 

# Target

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /temp/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

