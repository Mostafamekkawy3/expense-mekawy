const Transaction = require('../models/transaction');
// describtion get all transactions'
//route   Get /api/v1/transactions
//acess   public  
//async await for promise 

exports.getTransactions= async (req,res,next)=>{ 
	try{
		const transactions=await Transaction.find();

		return res.status(200).json({
			success:true,
			count:transactions.length,
			data:transactions
		});

	}catch(err){
		res.status(500).json({
			success:false,
			error:'server Error'
		});

	}

}


// describtion add transactions'
//route   post /api/v1/transactions
//acess   public  
exports.addTransactions= async (req,res,next)=>{ 
try{
	const{text, amount}= req.body;
	const transaction= await Transaction.create(req.body);

 res.status(201).json({
 	success:true,
 	data:transaction
 });

}
catch (err){
	if (err.name === 'ValidationError'){
		const messages= Object.values(err.errors).map(val=>val.message);

		return res.status(400).json({
			success:false,
			error:messages
			 	   
			});

	} else{
			res.status(500).json({
			success:false,
			error:'server Error'
		});
	}

}

}


// describtion get all transactions'
//route   delete /api/v1/transactions/:id
//acess   public  
exports.deleteTransactions= async (req,res,next)=>{ 
try{
	const transaction= await Transaction.findById(req.params.id);
	if(!transaction){
		return res.status(404).json({
			success:false,
			error:'No transaction found'

		});
	}
	await transaction.remove();
	return res.status(200).json({
			success:true,
			date:{}
		});

}catch(err){
res.status(500).json({
			success:false,
			error:'server Error'
		});
}
}

 
