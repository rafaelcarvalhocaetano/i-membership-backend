import mongoose from 'mongoose';
import { userschema } from '../schemas/UserSchema';

interface IUser extends mongoose.Document {
  url_img: string;
  user_name: string;
  end_date: string;
  profits: string;
  losses: string;
  phone: string;
}

export const UserRepository = mongoose.model<IUser>('ibank_users', userschema);