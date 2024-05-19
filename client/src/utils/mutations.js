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

   



export const ADD_CAT = gql`
mutation AddCat($name: String!, $age: Int!, $breed: String!, $temperament: String!, $ownerEmail: String!) {
  addCat(name: $name, age: $age, breed: $breed, temperament: $temperament, ownerId: $
    ownerId) {
      _id
      name
      age
      breed
      temperament
      ownerId
      }
      }


`

