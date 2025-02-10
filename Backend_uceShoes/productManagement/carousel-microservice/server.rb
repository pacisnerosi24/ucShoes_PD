require 'grpc'
require 'dotenv/load'
require 'mongoid'


$LOAD_PATH.unshift(File.expand_path('proto', __dir__))
require 'carousel_pb'
require 'carousel_services_pb'

require_relative 'config/database'
require_relative 'services/carousel_service'

puts "📌 Conectando a MongoDB en #{ENV.fetch('MONGO_HOST', 'localhost:27058')}..."
puts "📌 Base de datos: #{ENV.fetch('MONGO_DB', 'carousel_db')}"

def start_server
  server = GRPC::RpcServer.new
  server.add_http2_port('0.0.0.0:50051', :this_port_is_insecure)
  server.handle(CarouselService)
  puts "🚀 Servidor gRPC corriendo en puerto 50051..."
  server.run_till_terminated
end

start_server
