"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userschema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.userschema = new mongoose_1.default.Schema({
    url_img: {
        type: String
    },
    user_name: {
        type: String
    },
    end_date: {
        type: String
    },
    profits: {
        type: String
    },
    losses: {
        type: String
    },
    phone: {
        type: String,
    }
}, {
    timestamps: true
});
