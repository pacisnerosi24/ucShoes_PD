from graphene import ObjectType, Schema, Field, String, List


PRODUCTS = [
    {"id": "1", "name": "Product 1", "description": "Description 1", "price": "10.0"},
    {"id": "2", "name": "Product 2", "description": "Description 2", "price": "20.0"},
]

class ProductType(ObjectType):
    id = String()
    name = String()
    description = String()
    price = String()

class Query(ObjectType):
    get_product = Field(ProductType, id=String(required=True))
    get_all_products = List(ProductType)


    def resolve_get_product(root, info, id):
        for product in PRODUCTS:
            if product["id"] == id:
                return product
        return None

    def resolve_get_all_products(root, info):
        return PRODUCTS


schema = Schema(query=Query)

def get_product_by_id(id):
    query = f"""
    query {{
        getProduct(id: "{id}") {{
            id
            name
            description
            price
        }}
    }}
    """
    result = schema.execute(query)
    return result.data.get("getProduct")

def get_all_products():
    query = """
    query {
        getAllProducts {
            id
            name
            description
            price
        }
    }
    """
    result = schema.execute(query)
    return result.data.get("getAllProducts")
