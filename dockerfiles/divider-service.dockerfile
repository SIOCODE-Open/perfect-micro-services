# Stage 1: Build the service
FROM node:22 AS builder
WORKDIR /app
ADD package.json ./package.json
ADD packages/divider-service/ ./packages/divider-service/
RUN npm install
RUN npm run -w divider-service build

# Stage 2: Optimized runtime image
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/packages/divider-service/dist/ ./
CMD ["node", "index.js"]
EXPOSE 3003