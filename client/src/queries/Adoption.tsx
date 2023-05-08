import { gql } from "@apollo/client"

export const QUERY_ALL_ADOPTIONS = gql`
  query GetAdoptions($input: AdoptionInput) {
    adoptions(input: $input) { 
      adoptions {
      id
      name
      liked
      age
      species
      coat
      gender
      livedWith
      size
      }
      totalCount
      hasMore
    }
  }
`;

export const QUERY_ADOPTION_BY_ID = gql`
  query GetAdoptionById($id: ID!) {
    adoption(id: $id) {
      id
      name
      liked
      age
      species
      coat
      data
      gender
      livedWith
      size
    }
  }
`;

export const MUTATE_ADOPTION_BY_ID = gql`
  mutation MutateAdoptionById($id: ID!, $liked: Boolean!) {
    updateAdoptionLiked(id: $id, liked: $liked) {
      id
      name
      liked
      age
      species
      coat
      data
      gender
      livedWith
      size
    }
  }
`;