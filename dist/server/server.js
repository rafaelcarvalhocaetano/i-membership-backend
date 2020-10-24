"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("../util/database");
const UserRouter_1 = require("../routers/UserRouter");
class Init {
    constructor() {
        this.database = new database_1.Database();
        this.server = express_1.default();
        this.user_router = new UserRouter_1.UserRouter(this.server);
        this.database.createConnection();
        this.middler();
        this.router();
    }
    enabledCors() {
        const options = {
            methods: 'GET, OPTIONS, PUT, POST, DELETE',
            origin: '*'
        };
        this.server.use(cors_1.default(options));
    }
    middler() {
        this.enabledCors();
        this.server.use(body_parser_1.default.json());
        this.server.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    router() {
        this.server.route('/').get((req, resp) => resp.send({ message: 'VEM SER UM IBANK' }));
        this.user_router.userRouter();
    }
}
exports.Server = new Init();
