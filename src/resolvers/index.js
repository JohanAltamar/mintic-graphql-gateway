const authResolver = require('./auth_resolver');
const userEducationInfoResolver = require ('./userEducationInfo.resolver');
const userExperienceInfoResolver = require ('./userExperienceInfo.resolver');
const userPersonalInfoResolver = require('./userPersonalInfo.resolver');
const userProfessionalLinksResolver = require ('./userProfessionalLinks.resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(
    authResolver, 
    userEducationInfoResolver,
    userExperienceInfoResolver,
    userPersonalInfoResolver, 
    userProfessionalLinksResolver,
);

module.exports = resolvers;