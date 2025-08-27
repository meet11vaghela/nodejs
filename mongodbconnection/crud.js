// Crud with Mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://parikshitmidnight:wbwU1v48OEhODz5H@cluster0.in3p2.mongodb.net/ecommerce?authSource=admin&replicaSet=atlas-7ua2si-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  color: String,
  category: String,
  quantity: Number,
});

const addData = async() => {
  const productModel = mongoose.model('products', productSchema);
  let record = new productModel({
     name: "Oneplus 13R",
     price: 59999,
     brand:"Apple",
     color:"Red",
     category:"Electronics & Mobile",
     quantity: 10 
  });
  let data = await record.save();
  console.log(data);
}
// addData();

const updateData = async() => {
  const product = mongoose.model('products', productSchema);
  let data = await product.updateOne(
    {name: "Oneplus 9 Pro"}, {$set: {price: 59999}}
  );
  console.log(data);
}
// updateData();

const deleteData = async() => {
  const product = mongoose.model('products', productSchema);
  let data = await product.deleteOne({name:"Oneplus 13R"});
  console.log(data);
}
// deleteData();

const readData = async() => {
  const product = mongoose.model('products',productSchema);
  let data = await product.find();
  console.log(data);
}
// readData();