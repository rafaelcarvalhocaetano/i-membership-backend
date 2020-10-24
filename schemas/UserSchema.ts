import mongoose from 'mongoose';

export const userschema = new mongoose.Schema({
  url_img: {
    type: String
  },
  user_name:{
    type: String
  },
  end_date:{
    type: String
  },
  profits:{
    type: String
  },
  losses:{
    type: String
  },
  phone:{
    type: String,
  }
}, {
  timestamps: true
});