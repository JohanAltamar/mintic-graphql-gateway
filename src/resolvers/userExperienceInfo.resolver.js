const userExperienceInfoResolver = {
    Query: {
        getUserExperienceInfo: (_, { userId }, { dataSources, userIdToken }) => {
            if(userIdToken) {
                if (userId) return dataSources.userExperienceAPI.getExperienceInfo(userId); 
                return dataSources.userExperienceAPI.getExperienceInfo(userIdToken); 
            } else {
                return null;
            }
      },
    },
    Mutation: {
        setUserExperienceInfo: (_, { userId, experienceInfo }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userExperienceAPI.setExperienceInfo(userId, experienceInfo);
            } else {
              return null;
            }
        },

        updateUserExperienceInfo: (_,{ userId, experienceId, experienceInfo }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userExperienceAPI.updateExperienceInfo(userId, experienceId, experienceInfo );
            } else {
                return null;
            }
        },

        deleteUserExperienceInfo: (_,{ userId, experienceId }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userExperienceAPI.deleteExperienceInfo(userId, experienceId);
            } else {
                return null;
            }
        }

    },
      
    
  };

  module.exports =  userExperienceInfoResolver;
  