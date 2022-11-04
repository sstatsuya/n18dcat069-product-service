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
    comments: [Comment]
  }

  type Comment {
    id: String
    userID: String
    productID: String
    content: String
    time: Int
    product: Product
  }

  type Query {
    products: [Product]
    product(id: ID): Product
    comments: [Comment]
    comment(id: String): Comment
  }
`;

module.exports = typeDefs;
