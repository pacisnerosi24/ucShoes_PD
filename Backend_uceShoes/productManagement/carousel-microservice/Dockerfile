# 🔹 Use the official Ruby image
FROM ruby:3.3

# 🔹 Defines the working directory inside the container
WORKDIR /app

# 🔹 Copy Gemfile and Gemfile.lock to install dependencies first (optimizes Docker cache)
COPY Gemfile Gemfile.lock ./

# 🔹 Install project dependencies
RUN bundle install

# 🔹 Copy all the code from the microservice to the container
COPY . .

# 🔹 Exposes the port on which gRPC will run
EXPOSE 50051

# 🔹Command to run the server when the container starts
CMD ["ruby", "server.rb"]
