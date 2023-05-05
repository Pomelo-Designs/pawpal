import { gql } from "@apollo/client"

export const QUERY_ALL_ANIMALS = gql`
  query GetAllAnimals($input: AnimalInput) {
    animals(input: $input) { 
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
  }
`