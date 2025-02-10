require 'mongoid'

Mongoid.configure do |config|
  config.clients.default = {
    hosts: [ENV.fetch('MONGO_HOST', 'localhost:27058')],
    database: ENV.fetch('MONGO_DB', 'carousel_db'),
    options: {
      user: ENV.fetch('MONGO_USER', 'root'),
      password: ENV.fetch('MONGO_PASS', 'example'),
      auth_source: ENV.fetch('MONGO_AUTH', 'admin')
    }
  }
end
