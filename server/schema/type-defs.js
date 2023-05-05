const { gql } = require("apollo-server");

const typeDefs = gql`
  type Animal {
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
  
  input AnimalInput {
    age: Int
    liked: Boolean
  }
  
  type Query {
    animal(id: ID!): Animal
    animals(input: AnimalInput): [Animal]!
  }

  type Mutation {
    updateAnimalLiked(id: ID!, liked: Boolean!): Animal!
  }
`;

module.exports = { typeDefs };