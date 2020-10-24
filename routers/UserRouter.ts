import express, { Router } from 'express';
import { UserController } from '../controllers/UserController';

export class UserRouter {

  constructor(private router: express.Application) {}
  
  public userRouter() {
    this.router.route('/user').get(UserController.findAllUsers);
    this.router.route('/user/all').get(UserController.findAll);
    this.router.route('/user/:id').get(UserController.findByUserId);
    this.router.route('/user/').post(UserController.createUser);
    this.router.route('/user/:id').put(UserController.updateUser);
    this.router.route('/user/:id').delete(UserController.deleteUser);
  }
}