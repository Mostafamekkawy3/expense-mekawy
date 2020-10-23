import  React   , {useContext}from 'react';
import {GlobalContext} from'../context/GlobalState';

export const Transaction = ( {transaction})=> {
	const sign= transaction.amount < 0 ? '-' :'+';
	const color= transaction.amount < 0 ? 'minus' :'plus';
	//{ bracets is really important to define a function}
const {deleteTransactions}= useContext(GlobalContext);

	
		return (
			<h2>
			<li className={color}>
		          { transaction.text } <span> {sign}${Math.abs( transaction.amount) }</span>
		          <button onClick={()=>deleteTransactions(transaction._id)} className="delete-btn">x</button>
		        </li>

			</h2>
			
		)
	
}

//we can use props and do props.transaction.text and it will work 
// the sam I use destracter