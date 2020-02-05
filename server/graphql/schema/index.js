import { buildSchema } from 'graphql';
export default buildSchema(`
type User {
  _id: ID!
  email: String!
  token: String!
  firstName: String
  lastName: String
}
input UserInput {
  email: String!
  password: String!
  confirm: String!
  firstName: String!
  lastName: String!
}
type RootQuery {
  login(email: String!, password: String!): User
  getUserDetails(_id: String!): User
}
type RootMutation {
  createUser(userInput: UserInput): User
}
schema {
  query: RootQuery
  mutation: RootMutation
}
`)