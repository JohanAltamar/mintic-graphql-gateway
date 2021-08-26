const userPersonalInfoResolver = {
  Query: {
    getUserPersonalInfo: (_, { userId }, { dataSources, userIdToken }) => {
      if(userIdToken) {
        return dataSources.userPersonalInfoAPI.getUserInfo(userId);
      } else {
        return null
      }
    },
  },
  Mutation: {
    setUserPersonalInfo: (_, { userId, personalInfo }, { dataSources, userIdToken }) => {
      if(userId == userIdToken) {
        return dataSources.userPersonalInfoAPI.setUserInfo(userId, personalInfo);
      } else {
        return null
      }
    },
    updateUserPersonalInfo: (_, { userId, personalInfo }, { dataSources, userIdToken }) => {
      if(userId == userIdToken) {
        return dataSources.userPersonalInfoAPI.updateUserInfo(userId, personalInfo);
      } else {
        return null
      }
    },
  }
};

module.exports = userPersonalInfoResolver;
