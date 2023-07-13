FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
# parallel 하게 변경
RUN npm run build -w env-server
RUN npm run build -w api
RUN npm run build -w backend
# RUN npm ci --only=production && npm cache clean --force

FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/env-server/dist ./env-server/dist
COPY --from=builder /app/packages/api/dist ./api/dist
COPY --from=builder /app/packages/backend/dist ./backend/dist