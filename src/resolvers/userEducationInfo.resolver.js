 const userEducationInfoResolver = {
    Query: {
        getUserEducationInfo: (_, { userId }, { dataSources, userIdToken }) => {
            if(userIdToken) {
                return dataSources.userEducationAPI.getExperienceInfo(userId); 
            } else {
                return null;
            }
        },
    },
    Mutation: {
        setUserEducationInfo: (_, { userId, educationInfo }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userEducationAPI.setExperienceInfo(userId, educationInfo);
            } else {
                return null;
            }
        },

        updateUserEducationInfo: (_,{ userId, educationInfo, educationId }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userEducationAPI.updateExperienceInfo(userId, educationId, educationInfo );
            } else {
                return null;
            }
        },

        deleteUserEducationInfo: (_,{ userId, educationId }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userEducationAPI.deleteExperienceInfo(userId, educationId);
            } else {
                return null;
            }
        }
    },
};

module.exports =  userEducationInfoResolver;