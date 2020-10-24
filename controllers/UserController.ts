import express from 'express';
import HttpStatus from 'http-status';
import { IRequest } from '../models/Request';
import { UserRepository } from '../repository/UserRepository';

import { UserService } from '../services/user-services';
import { Response } from '../util/Response';

class IController {

  async findAllUsers(req: express.Request, resp: express.Response) {
    try {
      const page = +req.query.page;
      const limit = +req.query.limit;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      let result: any = {
        total_page: Math.round((await UserRepository.countDocuments().exec() / limit))
      };

      result.next = {
        page: page,
        limit: limit
      }
     
      if (startIndex > 0) {
        result.previous = {
          page: page - 1,
          limit: limit
        }
      }
      result.peyloader = await UserService.findAllUser(page, limit);
      Response.sendResponse(resp, HttpStatus.OK, result);
    } catch (e) {
      console.error.bind(console, 'Errors ' + e);
      throw new Error(e);
    }
  }
 

  async findAll(req: express.Request, resp: express.Response) {
    try {
      const data = await UserService.findAll();
      Response.sendResponse(resp, HttpStatus.OK, data);
    } catch (e) {
      console.error.bind(console, 'Errors ' + e);
      throw new Error(e);
    }
  }

  async findByUserId(req: express.Request, resp: express.Response) {
    try {
      const user = await UserService.findByUserId(req.params.id);
      Response.sendResponse(resp, HttpStatus.OK, user);
    } catch (error) {
      console.error.bind(console, 'Errors ' + error);
      throw new Error(error);
    }
  }

  async createUser(req: express.Request, resp: express.Response) {
    try {
      const user = await UserService.createUser(req.body);
      Response.sendResponse(resp, HttpStatus.OK, user);
      resp.send({user: req.body});
    } catch (error) {
      console.error.bind(console, 'Errors ' + error);
      throw new Error(error);
    }
  }

  async updateUser(req: express.Request, resp: express.Response) {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      Response.sendResponse(resp, HttpStatus.OK, user);
    } catch (error) {
      console.error.bind(console, 'Errors ' + error);
      throw new Error(error);
    }
  }

  async deleteUser(req: express.Request, resp: express.Response) {
    try {
      const user = await UserService.deleteUser(req.params.id); 
      Response.sendResponse(resp, HttpStatus.OK, user);
    } catch (error) {
      console.error.bind(console, 'Errors ' + error);
      throw new Error(error);
    }
  }

}

export const UserController = new IController();