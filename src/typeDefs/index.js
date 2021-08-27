const authTypeDefs = require('./auth_type_defs');
const userPersonalInfoTypeDefs = require('./userPersonalInfo.types');
const userExperienceInfoTypeDefs = require('./userExperienceInfo.types');
const userProfessionalLinksTypeDefs = require('./userProfessionalLinks.type');

const schemasArrays = [
  authTypeDefs, 
  userPersonalInfoTypeDefs,
  userExperienceInfoTypeDefs,
  userProfessionalLinksTypeDefs,
];

module.exports = schemasArrays; 
