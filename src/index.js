require('dotenv').config();
const ApolloServer = require('./models/apolloServer');

const server = new ApolloServer();

server.start();
