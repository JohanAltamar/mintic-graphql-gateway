const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../utils/microservices');

class UserEducationAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = serverConfig.user_info_api_url;
    }
    
    async getEducationInfo(userId) {
        return await this.get(`/api/v1/education/${userId}`);
    }

    async setEducationInfo(userId, body){
        return await this.post(`/api/v1/education/${userId}`, body)
    }

    async updateEducationInfo(userId, educationId, body){
        return await this.put(`/api/v1/education/${userId}/${educationId}`, body)
    }

    async deleteEducationInfo(userId, educationId){
        return await this.delete(`/api/v1/education/${userId}/${educationId}`)
    }
}

module.exports = UserEducationAPI;