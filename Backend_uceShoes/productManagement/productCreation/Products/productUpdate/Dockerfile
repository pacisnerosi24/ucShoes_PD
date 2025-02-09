# Using Node.js as a base
FROM node:18

# Defines the working directory inside the container
WORKDIR /app

# Copy essential files first to take advantage of Docker cache
COPY package*.json ./

# Install dependencies in production mode to optimize size
RUN npm install --only=production

# Copy the rest of the microservice code
COPY . .

# Define an argument for the port (without exposing it in the code)
ARG PORT
EXPOSE ${PORT}

# Command to start the application
CMD ["node", "server.js"]
 
