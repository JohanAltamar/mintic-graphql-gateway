 const userEducationInfoResolver = {
    Query: {
        getUserEducationInfo: (_, { userId }, { dataSources, userIdToken }) => {
            if(userIdToken) {
                if (userId) return dataSources.userEducationAPI.getEducationInfo(userId);
                return dataSources.userEducationAPI.getEducationInfo(userIdToken); 
            } else {
                return null;
            }
        },
    },
    Mutation: {
        setUserEducationInfo: (_, { userId, educationInfo }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userEducationAPI.setEducationInfo(userId, educationInfo);
            } else {
                return null;
            }
        },

        updateUserEducationInfo: (_,{ userId, educationInfo, educationId }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userEducationAPI.updateEducationInfo(userId, educationId, educationInfo );
            } else {
                return null;
            }
        },

        deleteUserEducationInfo: (_,{ userId, educationId }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) {
                return dataSources.userEducationAPI.deleteEducationInfo(userId, educationId);
            } else {
                return null;
            }
        }
    },
};

module.exports =  userEducationInfoResolver;