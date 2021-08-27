const userProfessionalLinksResolver = {
    Query: {
        getAllProfessionalLinks: (_, { userId }, { dataSources, userIdToken }) => {
            if(userIdToken) {
                return dataSources.userProfessionalLinksAPI.getAllLinks(userId);
            } else {
                return null
            }
        },
        getProfessionalLinkById: (_, { userId, linkId }, { dataSources, userIdToken }) => {
            if(userIdToken) {
                return dataSources.userProfessionalLinksAPI.getOneLink(userId, linkId);
            } else {
                return null
            }
        },
    },
    Mutation: {
        addProfessionalLink: (_, { userId, linkInfo }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userProfessionalLinksAPI.addLink(userId, linkInfo);
            } else {
                return null
            }
      },
        updateProfessionalLink: (_, { userId, linkId, linkInfo }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userProfessionalLinksAPI.updateLink(userId, linkId, linkInfo);
            } else {
                return null
            }
        },
        deleteProfessionalLink: (_, { userId, linkId }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userProfessionalLinksAPI.deleteLink(userId, linkId);
            } else {
                return null
            }
        },
    }
  };
  
  module.exports = userProfessionalLinksResolver;
  