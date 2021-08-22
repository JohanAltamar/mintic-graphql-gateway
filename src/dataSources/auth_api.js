const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../utils/microservices');

class AuthAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/token/`, credentials);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({refresh: token})));
        return await this.post(`/token/refresh/`, token);
    }

    async verifyToken(token) {
        token = new Object(JSON.parse(JSON.stringify({token})));
        return await this.post(`/token/verify/`, token);
    }
}

module.exports = AuthAPI;
