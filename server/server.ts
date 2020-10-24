import express from 'express';
import bodyParser from 'body-parser'; 
import cors from 'cors'; 

import { Database } from '../util/database';
import { UserRouter } from '../routers/UserRouter';

class Init {

  public server: express.Application;
  public database: Database;
  public user_router: UserRouter;

  constructor() {
    this.database = new Database();
    this.server = express();
    this.user_router = new UserRouter(this.server);
    this.database.createConnection();
    this.middler();
    this.router();
  }

  private enabledCors(): void {
    const options: cors.CorsOptions = {
      methods: 'GET, OPTIONS, PUT, POST, DELETE',
      origin: '*'
    };
    this.server.use(cors(options));
  }

  private middler(): void {
    this.enabledCors();
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));
  }

  private router(): void {
    this.server.route('/').get((req, resp) => resp.send({ message: 'VEM SER UM IBANK' }));
    this.user_router.userRouter();
  }
  
}

export const Server = new Init();