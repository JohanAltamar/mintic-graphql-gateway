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
    getUserPersonalInfo(userId: ID): UserPersonalInfo
  }

  input UserPersonalInfoInputPost {
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

  input UserPersonalInfoInputPut {
    name: String
    lastname: String
    city: String
    email: String
    cellphone: String
    dni: String
    dob: String
    description: String
    skills: [String!]
  }

  type Mutation {
    setUserPersonalInfo(personalInfo: UserPersonalInfoInputPost!, userId: ID!): UserPersonalInfo!
    updateUserPersonalInfo(personalInfo: UserPersonalInfoInputPut!, userId: ID!): UserPersonalInfo!
  }
`;

module.exports = userPersonalInfoTypeDefs;
