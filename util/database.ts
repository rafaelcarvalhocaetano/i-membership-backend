import mongoose from 'mongoose';

export class Database {

  public db_uri = 'mongodb+srv://question:q1w2e3r4@cluster0.4pdrr.mongodb.net/question?retryWrites=true&w=majority';

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