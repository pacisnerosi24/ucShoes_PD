from flask import Flask, request, jsonify
import graphene
from graphene import Schema
from graphql.execution import ExecutionResult
from my_graphql_schema.types.query_type import QueryType
#from my_graphql_schema.resolvers import Query
from my_graphql_schema.schema import schema

app = Flask(__name__)


schema = Schema(query=QueryType)


@app.route("/graphql", methods=["GET", "POST"])
def graphql_server():
    if request.method == "POST":
        
        data = request.get_json()
        query = data.get('query')
        variables = data.get('variables')  
    else:

        query = request.args.get('query')
        variables = None

    
    if query:
        result: ExecutionResult = schema.execute(query, variable_values=variables)
        return jsonify(result.data), 200
    else:
        return jsonify({"error": "No query provided"}), 400

if __name__ == "__main__":
    app.run(debug=True)
