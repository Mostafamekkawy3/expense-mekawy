const express= require('express');
const dotenv= require('dotenv');
const colors= require('colors');
const morgan= require('morgan');
const path=require('path');
const connectDB=require('./config/db')

dotenv.config({path:".env"});
const transactions= require('./routes/transactions');
const app= express();
connectDB();

app.use(express.json());

//get morgan 
if(process.env.NODE_ENV==="development"){
	app.use(morgan("dev"));

}
app.use('/api/v1/transactions', transactions);
if(process.env.NODE_ENV=== 'production'){
	app.use(express.static(path.join(__dirname,'client/build')));
	app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname,'client','build','index.html')));

}

const PORT= process.env.PORT || 5000;

app.listen(PORT,console.log( `server running in ${process.env.NODE_ENV} mode on Port
 ${PORT}` ));