


import { gql } from '@apollo/client';

export const QUERY_CATS = gql`
  query getCats {
    getCats {
      _id
      name
      breed
      age
      temperament
      owner {
        username
      }
      jobs {
        _id
        title
        description
      }
    }
  }
`;
