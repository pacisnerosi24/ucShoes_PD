from flask import Flask, request, jsonify
import graphene
from graphene import Schema
from graphql.execution import ExecutionResult
from my_graphql_schema.types.query_type import QueryType
from my_graphql_schema.resolvers import Query


app = Flask(__name__)

# Crear el esquema con los tipos y resolvers
schema = Schema(query=QueryType)

# Ruta para GraphQL
@app.route("/graphql", methods=["GET", "POST"])
def graphql_server():
    if request.method == "POST":
        # Obtener la consulta desde el cuerpo de la solicitud (POST)
        data = request.get_json()
        query = data.get('query')
        variables = data.get('variables')  # También puedes enviar variables con la consulta
    else:
        # Obtener la consulta desde los parámetros de la URL (GET)
        query = request.args.get('query')
        variables = None

    # Ejecutar la consulta
    if query:
        result: ExecutionResult = schema.execute(query, variable_values=variables)
        return jsonify(result.data), 200
    else:
        return jsonify({"error": "No query provided"}), 400

if __name__ == "__main__":
    app.run(debug=True)
