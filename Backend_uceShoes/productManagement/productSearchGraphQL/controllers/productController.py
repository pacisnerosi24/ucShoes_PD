from graphene import ObjectType, Schema, Field, String, List, ID, Float
from sqlalchemy.orm import Session
from config.database import SessionLocal
from models.product import Product

class ProductType(ObjectType):
    id = ID()
    name = String()
    description = String()
    price = Float()

class Query(ObjectType):
    get_product = Field(ProductType, id=ID(required=True))
    get_all_products = List(ProductType)

    def resolve_get_product(self, info, id):
        session: Session = SessionLocal()
        try:
            product = session.query(Product).filter(Product.id == id).first()
            return product
        finally:
            session.close()

    def resolve_get_all_products(self, info):
        session: Session = SessionLocal()
        try:
            return session.query(Product).all()
        finally:
            session.close()

# Define the schema
schema = Schema(query=Query)
