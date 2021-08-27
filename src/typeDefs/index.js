const authTypeDefs = require('./auth_type_defs');
const userEducationInfoTypeDefs = require('./userEducationInfo.types');
const userExperienceInfoTypeDefs = require('./userExperienceInfo.types');
const userPersonalInfoTypeDefs = require('./userPersonalInfo.types');
const userProfessionalLinksTypeDefs = require('./userProfessionalLinks.type');

const schemasArrays = [
  authTypeDefs, 
  userEducationInfoTypeDefs,
  userExperienceInfoTypeDefs,
  userPersonalInfoTypeDefs,
  userProfessionalLinksTypeDefs,
];

module.exports = schemasArrays; 
