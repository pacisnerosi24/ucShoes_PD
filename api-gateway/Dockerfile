# Usa una imagen base liviana de Node.js
FROM node:20-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos de dependencias primero (mejora el caché de Docker)
COPY package*.json ./

# Instala solo dependencias de producción
RUN npm install --only=production

# Copia el resto del código del API Gateway
COPY . .

# Define una variable de entorno para el puerto
ARG PORT=8080
ENV PORT=${PORT}

# Exponer el puerto sin hardcodearlo
EXPOSE ${PORT}

# Ejecutar el API Gateway
CMD ["node", "server.js"]
