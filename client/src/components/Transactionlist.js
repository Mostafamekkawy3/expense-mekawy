//useEffect hook for http request from component.
import  React   , {useContext,useEffect}from 'react';
import {GlobalContext} from'../context/GlobalState';
import {Transaction} from'./Transaction';


export const Transactionlist = ()=> {

const {transactions,getTransactions}= useContext(GlobalContext);
useEffect(()=>{
getTransactions();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);
	
		return (
			<>
		 	<h3>History</h3>
		      <ul  className="list">
		      {transactions.map((transaction)=> (<Transaction key={transaction.id} transaction= {transaction} />)



		      	//we can do it this way too without a additional component
		      	/*<li className="minus">
		          {transaction.text} <span>{transaction.amount}</span><button className="delete-btn">x</button>
		        </li>*/


		      )}
		      </ul>
          </>

		)
	
}


		        
