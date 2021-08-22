const { gql } = require('apollo-server');

const usersTypeDefs = gql `
    type Query {
        users: [String!]!
    }

    type User {
        UserId: String!
    }

    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }
    
    type Mutation {
        authenticate(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
        verifyToken(token: String!): User!
    }
`;

module.exports = usersTypeDefs;
