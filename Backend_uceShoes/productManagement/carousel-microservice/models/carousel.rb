require 'mongoid'

class CarouselImage
  include Mongoid::Document

  field :image_url, type: String
  field :title, type: String
end

