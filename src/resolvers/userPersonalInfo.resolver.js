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
};

module.exports = userPersonalInfoResolver;
