require 'mongoid'

class Product
  include Mongoid::Document

  field :name, type: String
  field :image_url, type: String
  field :price, type: Float
  field :discount, type: Float
  field :carousel_id, type: String
end
