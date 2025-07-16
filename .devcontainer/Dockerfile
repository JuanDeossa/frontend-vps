FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

# Cambia a usuario root para instalar dependencias necesarias
USER root

# Instala curl (por si no está)
RUN apt-get update && apt-get install -y curl

# Cambia al usuario 'node' para instalar bun en su entorno
USER node

# Instala bun en el entorno del usuario node
RUN curl -fsSL https://bun.sh/install | bash

# Agrega bun al PATH permanentemente para el usuario node
ENV PATH="/home/node/.bun/bin:${PATH}"
