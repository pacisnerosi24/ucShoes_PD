from graphene import Schema
from graphql import GraphQLError
from graphql.execution.executors.asyncio import AsyncioExecutor
from graphql.schema import print_schema
from graphql import parse
from graphene import Schema

# Importamos los resolvers
from graphql.resolvers import Query

def get_product_by_id(id):
    schema = Schema(query=Query)
    query = """
    query {
        getProduct(id: "%s") {
            id
            name
            description
            price
        }
    }
    """ % id
    result = schema.execute(query)
    return result.data["getProduct"]

def get_all_products():
    schema = Schema(query=Query)
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
    return result.data["getAllProducts"]
