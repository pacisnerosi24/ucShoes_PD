from graphene import ObjectType, String, Float, ID
import graphene
from models.product import Product

class ProductType(ObjectType):
    id = ID()
    name = String()
    description = String()
    price = Float()

class Query(ObjectType):
    get_product = graphene.Field(ProductType, id=ID())
    get_all_products = graphene.List(ProductType)

    def resolve_get_product(self, info, id):
        return Product.query.get(id)

    def resolve_get_all_products(self, info):
        return Product.query.all()
