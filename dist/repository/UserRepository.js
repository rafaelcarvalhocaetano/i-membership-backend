"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema_1 = require("../schemas/UserSchema");
exports.UserRepository = mongoose_1.default.model('ibank_users', UserSchema_1.userschema);
