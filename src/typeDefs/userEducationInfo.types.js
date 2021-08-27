const { gql } = require('apollo-server');

const userEducationInfoTypeDefs = gql`
    type ProgramType {
        name: String!
    }

    type UserEducationInfo {
        id: ID!
        _id: ID!
        program_name: String!
        program_type: ProgramType!
        institution_name: String!
        description: String
        start_date: String!
        end_date: String
    }

    type Results {
        results: [UserEducationInfo]
    }

    type Query {
        getUserEducationInfo(userId: ID!): Results
    }

    input UserEducationInfoInputPOST {
        id: ID!
        program_name: String!
        program_type: String!
        institution_name: String!
        description: String
        start_date: String!
        end_date: String
    }

    input UserEducationInfoInputPUT {
        id: ID!
        program_name: String!
        program_type: String!
        institution_name: String!
        description: String
        start_date: String!
        end_date: String
    }

    type Message {
        message: String
    }

    type Mutation {
        setUserEducationInfo(educationInfo: UserEducationInfoInputPOST!, userId: ID!): Message
        updateUserEducationInfo(educationInfo: UserEducationInfoInputPUT!, userId: ID!, educationId: String!): Message
        deleteUserEducationInfo(userId: ID!, educationId: String!): Message
    }
`;

module.exports = userEducationInfoTypeDefs; 
