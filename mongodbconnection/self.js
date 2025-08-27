const express = require('express');
const mongose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());


// server
app.use(express.static(path.join(__dirname, 'public')));
const PORT =3000;
const MONGO_URI = '';
mongose.connect(MONGO_URI, { useNewUrlParser: true, useUnifieldTopology: true})
 .then(()=> console.log(' MongoDB connected'))
 .catch(err => console.error('MongoDB Connection Error:' , err));

 // Schema 
 const userScema = new mongoose.Shema({
  name:String,
  email:String,
  age:Number,

 });
  const User = mongoose.model('User', userScema);

  // CRUD APIs
  app.get('/users' , async (req , res ) => {
    res.json(await User.find());
  });

  app.post('/users' , async(req , res) =>{
    const user = new User(req.body);
    await user.save();
    res.json(user);

  });

  app.put('/users/:id' , async(req , res)=>
  { 
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updated);

  });
  app.delete('/users/:id', async(req, res) => {
    await User.findByIDAndDelete(req.params.id);
    res.json({message: 'User Deleted'});
  });


  app.listen(PORT, ()=> console.log(` server running at ${PORT}`));
  // CRUD OPERATIONS FOR PRODUCTS

  //Crud with Mongoose
  const mongoose  = require('mongoose');
  mongoose.connect(MONGO_URI , {useNewUrlParser: true, useUnifieldTopology: true});
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    color: String,
    category: String,
    quantity: Number,

  });

  const addData = async() =>{
    const productModel = mongoose.model('products' , productSchema);
    let record = new productModel({
      name: "moto g31",
      price: 12999,
      brand: "motorola",
      color: "blue",
      category: "Electronics & Mobile",
      quantity: 10 
    });
    let data = await record.save();
    console.log(data);

  }
  addData();

  const updateData = async() => {
    const product = mongoose.model('products', productSchema);
    let data  = await product.updateOne(
      {name: "moto g31"}, {$set: {price: 11999}}
    );
    console.log(data);
  }
  updateData();

  const deleteData = async() =>{
    const product = mongoose.model('products', productSchema);
    let data = await product.deleteOne({name: "moto g31"});
    console.log(data);

  }
  deleteData();
  const readData = async() =>{
    const product = mongoose.model('products', productSchema);
    let data = await product.find();
    console.log(data);

  }

  