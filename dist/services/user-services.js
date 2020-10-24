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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserRepository_1 = require("../repository/UserRepository");
class Service {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield UserRepository_1.UserRepository.find();
            return request;
        });
    }
    findAllUser(page, pegeNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield UserRepository_1.UserRepository.find().sort({ created_at: -1 })
                .skip((page - 1) * pegeNumber)
                .limit(pegeNumber)
                .sort({ createdAt: -1 });
            return request;
        });
    }
    findByUserId(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield UserRepository_1.UserRepository.findById({ _id: _id });
            return data;
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRequest = yield UserRepository_1.UserRepository.create(user);
            return userRequest;
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userUpdate = UserRepository_1.UserRepository.findByIdAndUpdate(id, user);
            return userUpdate;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserRepository_1.UserRepository.findByIdAndDelete(id);
            return user;
        });
    }
}
exports.UserService = new Service();
