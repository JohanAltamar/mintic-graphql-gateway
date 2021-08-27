const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../utils/microservices');

class UserProfessionalLinksAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.user_info_api_url;
    }

    async getAllLinks(userId) {
        return await this.get(`/api/v1/professional-links/${userId}`);
    }

    async getOneLink(userId, linkId) {
        return await this.get(`/api/v1/professional-links/${userId}/${linkId}`);
    }

    async addLink(userId, linkInfo) {
        return await this.post(`/api/v1/professional-links/${userId}`, linkInfo);
    }

    async updateLink(userId, linkId, linkInfo) {
        return await this.put(`/api/v1/professional-links/${userId}/${linkId}`, linkInfo);
    }

    async deleteLink(userId, linkId) {
        return await this.delete(`/api/v1/professional-links/${userId}/${linkId}`);
    }
}

module.exports = UserProfessionalLinksAPI;
