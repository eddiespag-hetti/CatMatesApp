const typeDefs = `
type User {
  _id: ID!
  firstName: String
  lastName: String
  email: String!
  username: String!
  password: String!
}

type Cat {
  _id: ID!
  name: String!
  age: Int!
  breed: String!
  temperament: String!
  owner: [User!]
  jobs: [Job]
}

type Review {
  _id: ID!
  rating: Int!
  comment: String!
  reviewer: User!
}

type Job {
  _id: ID!
  title: String!
  description: String!
}

type Auth {
  token: ID!
  user: User
}

type Query {
  user(id: ID!): User
  cat(id: ID!): Cat
  jobs: [Job]
  getCats: [Cat]
  me: User
  getUserById(userId: ID!): User
  getCatsByOwnerId(ownerId: ID!): [Cat]
  getJobById(jobId: ID!): Job
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(
    firstName: String, 
    lastName: String, 
    username: String!, 
    email: String!, 
    password: String!
  ): Auth
  addCat(
    ownerId: ID!, 
    name: String!, 
    age: Int!, 
    breed: String!, 
    temperament: String!
  ): Cat
  addJob(
    title: String!, 
    description: String!
  ): Job
}

`;

module.exports = typeDefs;
