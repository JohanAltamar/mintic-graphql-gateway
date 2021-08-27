const authResolver = require('./auth_resolver');
const userPersonalInfoResolver = require('./userPersonalInfo.resolver');
const userExperienceInfoResolver = require ('./userExperienceInfo.resolver');
const userProfessionalLinksResolver = require ('./userProfessionalLinks.resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(
    authResolver, 
    userPersonalInfoResolver, 
    userExperienceInfoResolver,
    userProfessionalLinksResolver,
);

module.exports = resolvers;