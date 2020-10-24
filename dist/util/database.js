"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        this.db_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ibank';
        this.options = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        };
    }
    createConnection() {
        console.log("Database -> db_uri", this.db_uri);
        mongoose_1.default.connect(this.db_uri, this.options);
    }
}
exports.Database = Database;
