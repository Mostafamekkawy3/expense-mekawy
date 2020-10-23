const mongoose= require('mongoose');

const transactionSchema= new mongoose.Schema({
  text:{
  	type:String,
  	trim: true,
  	required:[true,'please add some text']
  },
  amount:{
  	type:Number,
  	required:[true,'please add Positive or Negative Number ']
  },
  createdAt:{
  	type:Date,
  	default:Date.now
  }

});

module.exports= mongoose.model('Transaction',transactionSchema);