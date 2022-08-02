const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    price: Int
    sale: Int
    sold: Int
    rate: Float
    type: [String]
    description: [String]
    splash: String
    images: [String]
  }

  type Query {
    products: [Product]
    product(id: ID): Product
  }
`;

module.exports = typeDefs;
