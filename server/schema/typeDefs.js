const typeDefs = `

type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    cats: [Cat!]!
    roles: [UserRole!]!
    createdAt: String!
    updatedAt: String!
  }
  
  enum UserRole {
    OWNER,
    SITTER
  }
  
  type Query {
    user(id: ID!): User
    
  }
  
  type Mutation {
    createUser(username: String!, email: String!, password: String!, roles: [UserRole!]!): User!
   
  }
  

 
  
type Cat {
    id: ID!
    name: String!
    age: Int!
    breed: String!
    temperament: String!
    owner: User!
    reviews: [Review!]!
  
  }
  
  type Review {
    id: ID!
    rating: Int!
    comment: String!
    reviewer: User!
  
   
  }
  
  type Query {
    cat(id: ID!): Cat
  
  }
  
  type Mutation {
    createCat(ownerId: ID!, name: String!, age: Int!, breed: String!, temperament: String!): Cat!
  
  }
  `

  module.exports = typeDefs;