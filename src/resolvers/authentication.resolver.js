const authResolver = {
  Mutation: {
      authenticate: (_, { credentials }, { dataSources }) => dataSources.authAPI.authRequest(credentials),
      refreshToken: (_, { refresh }, { dataSources }) => dataSources.authAPI.refreshToken(refresh),
      verifyToken: (_, { token }, { dataSources }) => dataSources.authAPI.verifyToken(token)
  }
};

module.exports = authResolver;
