const authResolver = require('./auth_resolver');
const userPersonalInfoResolver = require('./userPersonalInfo.resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(authResolver, userPersonalInfoResolver);

module.exports = resolvers;