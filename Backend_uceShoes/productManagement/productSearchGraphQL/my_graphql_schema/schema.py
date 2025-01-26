from graphene import Schema
from my_graphql_schema.types.query_type import QueryType

schema = Schema(query=QueryType)

