import graphene
from my_graphql_schema.resolvers import ProductType

class QueryType(graphene.ObjectType):
    get_product = graphene.Field(ProductType, id=graphene.Int())
    get_all_products = graphene.List(ProductType)

    def resolve_get_product(self, info, id):
        # Simulación de datos
        return {"id": id, "name": f"Product {id}", "description": "Sample", "price": 10.0}

    def resolve_get_all_products(self, info):
        # Simulación de lista de productos
        return [
            {"id": 1, "name": "Product A", "description": "Description A", "price": 29.99},
            {"id": 2, "name": "Product B", "description": "Description B", "price": 49.99}
        ]
