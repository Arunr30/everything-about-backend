

const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Products {
    id: ID!
    title: String!
    category: String!
    price: Int!
    inStock: Boolean  # Make it Boolean! if it should always have a value
  }

  type Query {
    products: [Products!]!
    product(id: ID!): Products
  }

  type Mutation {
    createProducts(
      title: String!
      category: String!
      price: Int!
      inStock: Boolean
    ): Products
  }
`;

module.exports = typeDefs;