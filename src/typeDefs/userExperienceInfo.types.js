const { gql } = require('apollo-server');

const userExperienceInfoTypeDefs = gql`
  type UserExperienceInfo {
    id: ID
    _id: ID
    position_name: String
    company_name: String
    company_start_date: String
    company_end_date: String
    city: String
    responsabilities: [String!]
    achievements: [String!]
  }

  type Results {
    results: [UserExperienceInfo]
  }

  type Query {
    getUserExperienceInfo(userId: ID!): Results
  }

  input UserExperienceInfoInput {
    id: ID!
    position_name: String!
    company_name: String!
    company_start_date: String!
    company_end_date: String
    city: String
    responsabilities: [String!]
    achievements: [String!]
  }

  type Message {
    message: String
  }

  type Mutation {
    setUserExperienceInfo(experienceInfo: UserExperienceInfoInput! , userId: ID!): Message
    updateUserExperienceInfo(experienceInfo: UserExperienceInfoInput! , userId: ID! , experienceId: String!): Message
    deleteUserExperienceInfo(userId: ID! , experienceId: String!): Message
  }
`;

module.exports = userExperienceInfoTypeDefs;