"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class IResponse {
    constructor() {
        this.sendResponse = (response, statusCode, data) => response.status(statusCode).json(data);
    }
}
exports.Response = new IResponse();
