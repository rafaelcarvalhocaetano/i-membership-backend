"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const UserRepository_1 = require("../repository/UserRepository");
const user_services_1 = require("../services/user-services");
const Response_1 = require("../util/Response");
class IController {
    findAllUsers(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = +req.query.page;
                const limit = +req.query.limit;
                const startIndex = (page - 1) * limit;
                const endIndex = page * limit;
                let result = {
                    total_page: Math.round(((yield UserRepository_1.UserRepository.countDocuments().exec()) / limit)) ? Math.round(((yield UserRepository_1.UserRepository.countDocuments().exec()) / limit)) : 10
                };
                result.next = {
                    page: page,
                    limit: limit
                };
                if (startIndex > 0) {
                    result.previous = {
                        page: page - 1,
                        limit: limit
                    };
                }
                result.peyloader = yield user_services_1.UserService.findAllUser(page, limit);
                Response_1.Response.sendResponse(resp, http_status_1.default.OK, result);
            }
            catch (e) {
                console.error.bind(console, 'Errors ' + e);
                throw new Error(e);
            }
        });
    }
    findAll(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_services_1.UserService.findAll();
                Response_1.Response.sendResponse(resp, http_status_1.default.OK, data);
            }
            catch (e) {
                console.error.bind(console, 'Errors ' + e);
                throw new Error(e);
            }
        });
    }
    findByUserId(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_services_1.UserService.findByUserId(req.params.id);
                Response_1.Response.sendResponse(resp, http_status_1.default.OK, user);
            }
            catch (error) {
                console.error.bind(console, 'Errors ' + error);
                throw new Error(error);
            }
        });
    }
    createUser(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_services_1.UserService.createUser(req.body);
                Response_1.Response.sendResponse(resp, http_status_1.default.OK, user);
                resp.send({ user: req.body });
            }
            catch (error) {
                console.error.bind(console, 'Errors ' + error);
                throw new Error(error);
            }
        });
    }
    updateUser(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_services_1.UserService.updateUser(req.params.id, req.body);
                Response_1.Response.sendResponse(resp, http_status_1.default.OK, user);
            }
            catch (error) {
                console.error.bind(console, 'Errors ' + error);
                throw new Error(error);
            }
        });
    }
    deleteUser(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_services_1.UserService.deleteUser(req.params.id);
                Response_1.Response.sendResponse(resp, http_status_1.default.OK, user);
            }
            catch (error) {
                console.error.bind(console, 'Errors ' + error);
                throw new Error(error);
            }
        });
    }
}
exports.UserController = new IController();
