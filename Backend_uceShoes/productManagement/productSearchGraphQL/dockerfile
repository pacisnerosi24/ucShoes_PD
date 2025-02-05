# Uses Python 3.9 as a base
FROM python:3.9

# Defines the working directory inside the container
WORKDIR /app

# Copy the dependency files
COPY requirements.txt .

# Install dependencies without cache to reduce size
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install pymysql 

# Copy the rest of the microservice code
COPY . .

# Define an argument for the port and set it as an environment variable
ARG GRAPHQL_PORT=3010
ENV GRAPHQL_PORT=${GRAPHQL_PORT}

# Expose port using environment variable
EXPOSE ${GRAPHQL_PORT}

# Running Flask Server with GraphQL
CMD ["sh", "-c", "python server.py"]
