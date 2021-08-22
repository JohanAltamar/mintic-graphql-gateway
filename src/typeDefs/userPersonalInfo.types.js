const { gql } = require('apollo-server');

const userPersonalInfoTypeDefs = gql`
  type UserPersonalInfo {
    id: ID!
    name: String!
    lastname: String!
    city: String
    email: String!
    cellphone: String!
    dni: String
    dob: String
    description: String!
    skills: [String!]
  }

  type Query {
    getUserPersonalInfo(userId: ID!): UserPersonalInfo
  }

  input UserPersonalInfoInput {
    id: ID!
    name: String!
    lastname: String!
    city: String
    email: String!
    cellphone: String!
    dni: String
    dob: String
    description: String!
    skills: [String!]
  }
  type Mutation {
    setUserPersonalInfo(personalInfo: UserPersonalInfoInput!): UserPersonalInfo
    updateUserPersonalInfo(personalInfo: UserPersonalInfoInput!): UserPersonalInfo
  }
`;

module.exports = userPersonalInfoTypeDefs;
