FROM node:alpine AS node
WORKDIR /ang
COPY . .
RUN npm i && npm run build


FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=node /ang/dist/quanlicaan-client .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
