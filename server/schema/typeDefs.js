const { gql } = require("apollo-server");

const typeDefs = gql`
  type Adoption {
    id: ID!
    name: String!
    age: Int!
    species: String!
    gender: String!
    livedWith: String!
    size: Int!
    coat: String!
    data: String!
    liked: Boolean!
  }
  
  input AdoptionInput {
    age: Int
    liked: Boolean
    gender: String
    species: String
    livedWith: String
    sortByAge: String
    sortBySize: String
    offset: Int
    limit: Int
  }
  
  type Query {
    adoption(id: ID!): Adoption
    adoptions(input: AdoptionInput): [Adoption]!
  }

  type Mutation {
    updateAdoptionLiked(id: ID!, liked: Boolean!): Adoption!
  }
`;

module.exports = { typeDefs };