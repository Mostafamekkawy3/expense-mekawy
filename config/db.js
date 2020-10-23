const mongoose= require('mongoose');
const connectDB=async ()=>{
try{
	const conn = await mongoose.connect(process.env.MONGO_URL,{
		useNewUrlParser:true,
		useCreateIndex:true,
		useUnifiedTopology:true

	});
	console.log(`MongoDB connected:${conn.connection.host}`.green);

	}catch(err){
	console.log(`Error:${err.message}`);
	//exite with failiuer
	process.exit(1);



	}
}

module.exports=connectDB;