import mongoose, { Collection } from 'mongoose';

mongoose.set('strictQuery', false);
const mongoDB = "mongodb://127.0.0.1:27017/test"; 

async function main() {
  await mongoose.connect(mongoDB);  
};

main().catch(err => console.log(err));
const SoldierSchema = new mongoose.Schema({
  _id:{type:String,required:true},
  name:{type:String,required:true},
  rank:{type:String,required:true},
  limitations:{type:Array,required:true},
  duties:{type:Array,default:[]},
 }
);

export const Soldier = mongoose.model('Soldier', SoldierSchema); 