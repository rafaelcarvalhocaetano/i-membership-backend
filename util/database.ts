import mongoose from 'mongoose';

export class Database {

  public db_uri = process.env.MONGO || 'mongodb://localhost:27017/imembership';

  private options = { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  };

  public createConnection() {
    mongoose.connect(this.db_uri, this.options);
  }

}
