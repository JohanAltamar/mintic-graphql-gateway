const authTypeDefs = require('./auth_type_defs');
const userPersonalInfoTypeDefs = require('./userPersonalInfo.types');
const userExperienceInfoTypeDefs = require('./userExperienceInfo.types');

const schemasArrays = [
  authTypeDefs, 
  userPersonalInfoTypeDefs,
  userExperienceInfoTypeDefs,
];

module.exports = schemasArrays; 
