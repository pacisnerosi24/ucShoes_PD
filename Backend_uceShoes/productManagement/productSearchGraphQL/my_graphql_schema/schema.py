import os
from graphql import build_schema

# Path al esquema
SCHEMA_PATH = os.path.join(os.path.dirname(__file__), "schema.graphql")

# Carga dinámica del esquema
with open(SCHEMA_PATH, "r") as schema_file:
    schema = build_schema(schema_file.read())
