"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const UserController_1 = require("../controllers/UserController");
class UserRouter {
    constructor(router) {
        this.router = router;
    }
    userRouter() {
        this.router.route('/user').get(UserController_1.UserController.findAllUsers);
        this.router.route('/user/all').get(UserController_1.UserController.findAll);
        this.router.route('/user/:id').get(UserController_1.UserController.findByUserId);
        this.router.route('/user/').post(UserController_1.UserController.createUser);
        this.router.route('/user/:id').put(UserController_1.UserController.updateUser);
        this.router.route('/user/:id').delete(UserController_1.UserController.deleteUser);
    }
}
exports.UserRouter = UserRouter;
