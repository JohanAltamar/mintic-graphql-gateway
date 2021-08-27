const { gql } = require('apollo-server');

const userProfessionalLinks = gql`
    type SocialNetwork {
        name: String!
        _id: String!
    }

    type ProfessionalLink {
        _id: String!
        id: ID!
        social_network: SocialNetwork!
        url: String!
    }

    type LinksResult {
        results: [ProfessionalLink!]
    }

    type Query {
        getAllProfessionalLinks(userId: ID!): LinksResult
        getProfessionalLinkById(userId: ID!, linkId: ID!): ProfessionalLink
    }

    input ProfessionalLinkPostInput {
        social_network: String!
        url: String!
    }

    input ProfessionalLinkPutInput {
        social_network: String
        url: String
    }

    type Mutation {
        addProfessionalLink(userId: ID!, linkInfo: ProfessionalLinkPostInput!): Message!
        updateProfessionalLink(userId: ID!, linkId: String!, linkInfo: ProfessionalLinkPutInput!): Message!
        deleteProfessionalLink(userId: ID!, linkId: String!): Message!
    }
`;

module.exports = userProfessionalLinks;
