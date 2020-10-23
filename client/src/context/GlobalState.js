import React ,{ createContext, useReducer}from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//Intial state

const instialState= {

	transactions:[],
  error:null,
  loading:true
}

//createContext

export const GlobalContext= createContext(instialState);

//provider component


export const GlobalProvider = ({children})=>{
	const [state, dispatch ] = useReducer(AppReducer,instialState);

	//actions
async function getTransactions() {
	try{
		const res = await axios.get('api/v1/transactions');
		dispatch({
			type:'GET_TRANSACTION',
			payload:res.data.data
		});

	}catch(err){
		dispatch({
			type:'TRANSACTION_ERROR',
			payload:err.response.data.error
		})


	}

}
async function deleteTransactions(id){
	try{
		await axios.delete(`api/v1/transactions/${id}`);
		dispatch({
		type:'DELETE_TRANSACTION',
		payload:id
	     });

	}catch(err){
		dispatch({
			type:'TRANSACTION_ERROR',
			payload:err.response.data.error
		});

	}
	/*dispatch({
		type:'DELETE_TRANSACTION',
		payload:id
	});*/
}

async function addTransaction(transaction){
	const config={
		header:{
			'Content-Type':'application/json'
		}
	}

	try{
		// we add response pass the data under transaction and take the config format
		const res= await axios.post('api/v1/transactions',transaction,config);
		dispatch({
			type:'ADD_TRANSACTION',
			payload:res.data.data
		})


	}
	catch(err){
		dispatch({
			type:'TRANSACTION_ERROR',
			payload:err.response.data.error
		});

	}
	/*dispatch({
		type:'ADD_TRANSACTION',
		payload: transaction
	});*/
}

	return(
		<GlobalContext.Provider  value = {{ 	transactions:state.transactions,
			loading:state.loading,
			getTransactions,
		  error:state.error,
		 addTransaction ,
		 deleteTransactions}}>
		{ children }
		</GlobalContext.Provider>


		)
}