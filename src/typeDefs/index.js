const authTypeDefs = require('./auth_type_defs');
const userPersonalInfoTypeDefs = require('./userPersonalInfo.types');
const userExperienceInfoTypeDefs = require('./userExperienceInfo.types');
const userEducationInfoTypeDefs = require('./userEducationInfo.types');

const schemasArrays = [
  authTypeDefs, 
  userPersonalInfoTypeDefs,
  userExperienceInfoTypeDefs,
  userEducationInfoTypeDefs,
];

module.exports = schemasArrays; 
