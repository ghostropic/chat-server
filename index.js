"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apollo_server_express_1 = require("apollo-server-express");
// import { chats } from './db';
const schema_1 = __importDefault(require("./schema"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/_ping', (req, res) => {
    res.send('pong');
});
// app.get('/chats', (req, res) => {
//   res.json(chats);
// })
const server = new apollo_server_express_1.ApolloServer({ schema: schema_1.default });
server.applyMiddleware({
    app,
    path: '/graphql'
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
