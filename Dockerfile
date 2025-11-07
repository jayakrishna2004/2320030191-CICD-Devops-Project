# Stage 1: build static site
FROM node:18-alpine AS builder
WORKDIR /app
COPY portfolio/package.json ./
RUN npm install --silent
COPY portfolio/ ./
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
