const { gql } = require("apollo-server");

const typeDefs = gql`

  type Adoption {
    id: ID!
    name: String!
    age: Int!
    species: Species!
    gender: Gender!
    livedWith: LivedWith!
    size: Int!
    coat: Coat!
    data: String!
    liked: Boolean!
  }
  
  input AdoptionInput {
    age: Int
    liked: Boolean
    gender: Gender
    species: Species
    coat: Coat
    livedWith: LivedWith
    sortByAge: Sort
    sortBySize: Sort
    limit: Int
    offset: Int
  }

  type AdoptionList {
    adoptions: [Adoption!]!
    totalCount: Int
    hasMore: Int
  }
  
  type Query {
    adoption(id: ID!): Adoption
    adoptions(input: AdoptionInput): AdoptionList!
  }
  
  type Mutation {
    updateAdoptionLiked(id: ID!, liked: Boolean!): Adoption!
  }

  enum Species {
    CATS
    DOGS
    CRITTERS
    BIRDS
  }

  enum LivedWith {
    CHILDREN
    ANIMALS
  }

  enum Gender {
    MALE
    FEMALE
  }
  
  enum Coat {
    SHORT
    MEDIUM
    LONG
  }
  
  enum Sort {
    ASC
    DESC
  }
`;

module.exports = { typeDefs };