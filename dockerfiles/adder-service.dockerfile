# Stage 1: Build the service
FROM node:22 AS builder
WORKDIR /app
ADD package.json ./package.json
ADD packages/adder-service/ ./packages/adder-service/
RUN npm install
RUN npm run -w adder-service build

# Stage 2: Optimized runtime image
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/packages/adder-service/dist/ ./
CMD ["node", "index.js"]
EXPOSE 3000