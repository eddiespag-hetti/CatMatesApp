import { gql } from "@apollo/client";

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

export const GET_USER_BY_ID = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      jobs {
        _id
        title
        description
      }
    }
  }
`;

export const GET_CAT_OWNER_BY_ID = gql`
  query catOwner($id: ID!) {
    catOwner(id: $id) {
      _id
      username
      email
      jobs {
        _id
        title
        description
      }
    }
  }
`;

export const GET_JOB_BY_ID = gql`
  query job($id: ID!) {
    job(id: $id) {
      _id
      title
      description
    }
  }
`;

export const GET_CAT = gql`
  query getCat($cat: String!) {
    getCat(cat: $cat) {
      _id
      name
      owner
    }
  }
`;
