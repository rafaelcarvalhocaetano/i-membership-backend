"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        this.utl = 'mongodb+srv://question:q1w2e3r4@cluster0.4pdrr.mongodb.net/ibank?retryWrites=true&w=majority';
        // public db_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ibank';
        this.options = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        };
    }
    createConnection() {
        mongoose_1.default.connect(this.utl, this.options);
    }
}
exports.Database = Database;
