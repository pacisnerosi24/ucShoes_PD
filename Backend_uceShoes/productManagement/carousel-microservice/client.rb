require 'grpc'

# Cargar archivos Protobuf correctamente
$LOAD_PATH.unshift(File.expand_path('proto', __dir__))  # 🔹 Añade la carpeta proto al LOAD_PATH
require 'carousel_pb'
require 'carousel_services_pb'

def get_carousel_images(stub)
  request = Carousel::EmptyRequest.new
  response = stub.get_carousel_images(request)

  response.images.each do |image|
    puts "#{image.id} - #{image.title} (#{image.image_url})"
  end
end

def get_discounted_products(stub, image_id)
  request = Carousel::ImageIdRequest.new(id: image_id)
  response = stub.get_discounted_products(request)

  response.products.each do |product|
    puts "#{product.id} - #{product.name} - $#{product.price} (Descuento: #{product.discount}%)"
  end
end

def run
  stub = Carousel::CarouselService::Stub.new('localhost:50051', :this_channel_is_insecure)

  puts "📌 Obteniendo imágenes del carrusel..."
  get_carousel_images(stub)

  puts "\n🔎 Ingresar ID de imagen para ver productos en oferta:"
  image_id = gets.chomp
  get_discounted_products(stub, image_id)
end

run
