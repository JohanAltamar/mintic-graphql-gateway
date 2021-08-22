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
}

module.exports = UserPersonalInfoAPI;
