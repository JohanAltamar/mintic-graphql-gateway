const authResolver = require('./auth_resolver');
const userPersonalInfoResolver = require('./userPersonalInfo.resolver');
const userExperienceInfoResolver = require ('./userExperienceInfo.resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(authResolver, userPersonalInfoResolver, userExperienceInfoResolver);

module.exports = resolvers;