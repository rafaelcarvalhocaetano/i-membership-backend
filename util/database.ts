import mongoose from 'mongoose';

export class Database {


  public db_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ibank';

  private options = { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  };

  public createConnection() {
    console.log("Database -> db_uri", this.db_uri)
    mongoose.connect(this.db_uri, this.options);
  }

}