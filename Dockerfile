# Etapa 1: Build con Node (Vite y crypto funcionan)
FROM node:20-alpine as builder

WORKDIR /app

COPY package.json bun.lock vite.config.ts tsconfig*.json index.html ./
COPY public ./public
COPY src ./src

RUN npm install -g bun
RUN bun install
RUN bun run build

# Etapa 2: Servir con Bun (sin crypto.hash necesario)
FROM oven/bun:1.1.10

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY server.ts .

EXPOSE 3001

CMD ["bun", "server.ts"]
