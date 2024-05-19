
import { gql } from '@apollo/client'

export const QUERY_CATS = gql`

query GetCats {
    getCats {
      owner {
        username
      }
      name
      age
      breed
      temperament
    }
  }
  `