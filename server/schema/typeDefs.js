const typeDefs = `

type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
    cats: [Cat!]!
    roles: [String!]
    createdAt: String!
    updatedAt: String!
  }
  
  type Cat {
      id: ID!
      name: String!
      age: Int!
      breed: String!
      temperament: String!
      owner: User!

      # reviews: [Review!]!
    
    }
    
    type Review {
      id: ID!
      rating: Int!
      comment: String!
      reviewer: User!
    }
    
     
type Auth {
  token: ID!
  user: User
}

    type Query {
      user(id: ID!): User
        cat(id: ID!): Cat
    }
    

  
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(firsrName: String!, lastName: String! username: String! email: String!, password: String!, roles: [String!]!): Auth
    createCat(ownerId: ID!, name: String!, age: Int!, breed: String!, temperament: String!): Cat!
  
  }
  
  `

 
  

  


  module.exports = typeDefs;