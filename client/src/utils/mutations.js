import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const POST_JOB = gql`
mutation AddJob($title: String!, $description: String!) {
  addJob(title: $title, description: $description) {
    _id
    description
    title
  }
}


`

// export const REMOVE_JOB = gql`
// deleteJob(id: ID!): Boolean {
//   deleteJob(id: $id) {
//     _id
//     description
//     title
//     }
// `