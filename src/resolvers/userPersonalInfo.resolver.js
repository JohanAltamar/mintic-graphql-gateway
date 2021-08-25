const userPersonalInfoResolver = {
  Query: {
    getUserPersonalInfo: (_, { userId }, { dataSources, userIdToken }) => {
      if(userId == userIdToken) {
        return dataSources.userPersonalInfoAPI.getUserInfo(userId);
      } else {
        return null
      }
    },
  },
  Mutation: {
    
  }
};

module.exports = userPersonalInfoResolver;
