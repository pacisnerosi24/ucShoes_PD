require 'grpc'
require_relative '../proto/carousel_services_pb'
require_relative '../models/carousel'
require_relative '../models/product'

class CarouselService < Carousel::CarouselService::Service
 
  def get_carousel_images(_request, _unused_call)
    images = CarouselImage.all.map do |image|  
      Carousel::CarouselImage.new(
        id: image.id.to_s,
        image_url: image.image_url,
        title: image.title
      )
    end

    Carousel::CarouselImageListResponse.new(images: images)
  end

 
  def get_discounted_products(request, _unused_call)
    products = Product.where(carousel_id: request.id)

    product_list = products.map do |product|
      Carousel::Product.new(
        id: product.id.to_s,
        name: product.name,
        image_url: product.image_url,
        price: product.price,
        discount: product.discount
      )
    end

    Carousel::ProductListResponse.new(products: product_list)
  end
end
