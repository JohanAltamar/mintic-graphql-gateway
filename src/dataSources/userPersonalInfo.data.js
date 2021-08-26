const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../utils/microservices');

class UserPersonalInfoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.user_info_api_url;
  }

  async getUserInfo(userId) {
    return await this.get(`/api/v1/personal-info/${userId}`);
  }

  async setUserInfo(userId, userInfo) {
    return await this.post(`/api/v1/personal-info/${userId}`, userInfo);
  }

  async updateUserInfo(userId, userInfo) {
    return await this.put(`/api/v1/personal-info/${userId}`, userInfo);
  }
}

module.exports = UserPersonalInfoAPI;
