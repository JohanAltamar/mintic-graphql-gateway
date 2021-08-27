require('dotenv').config();
const { ApolloServer } = require('apollo-server');

/* Types definitions */
const typeDefs = require('../typeDefs');
/* Resolvers */
const resolvers = require('../resolvers');
/* Data Sources */
const AuthAPI = require('../dataSources/auth_api');
const UserPersonalInfoAPI = require('../dataSources/userPersonalInfo.data');
const UserExperienceAPI = require('../dataSources/userExperienceInfo.data');
const UserEducationAPI = require('../dataSources/userEducationInfo.data');
/* Context */
const authentication = require('../utils/authentication');

class Server {
  constructor() {
    this.port = process.env.PORT || 4000;
    this.server = new ApolloServer({
      context: authentication,
      typeDefs,
      resolvers,
      dataSources: () => ({
        authAPI: new AuthAPI(),
        userPersonalInfoAPI: new UserPersonalInfoAPI(),
        userExperienceAPI: new UserExperienceAPI(),
        userEducationAPI: new UserEducationAPI(),
      }),
      introspection: true,
      playground: true
    });
  }

  start() {
    this.server.listen(this.port).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  }
}

module.exports = Server;
