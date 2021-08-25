const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../utils/microservices');

class UserExperienceAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = serverConfig.user_info_api_url;
    }
    
    async getExperienceInfo(userId) {
        return await this.get(`/api/v1/experience/${userId}`);
    }

    async setExperienceInfo(userId, body){
        return await this.post(`/api/v1/experience/${userId}`, body)
    }

    async updateExperienceInfo(userId, experienceId, body){
        return await this.put(`/api/v1/experience/${userId}/${experienceId}`, body)
    }

    async deleteExperienceInfo(userId, experienceId){
        return await this.delete(`/api/v1/experience/${userId}/${experienceId}`)
    }
}

module.exports = UserExperienceAPI;