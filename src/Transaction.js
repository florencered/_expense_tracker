import React from 'react'
import { GlobalContext } from './context/GlobalState' 
 import { useContext } from 'react'
const Transaction = () => {  
    
    const {transactions}=useContext(GlobalContext) ;
    const {deleteTransaction}=useContext(GlobalContext);
   /**  let i=0; 
    const sign="";
    for(i=0;i<transactions.length;i++){
    const sign=transactions[i].amount<0?'-':"+"; 
    console.log(sign); not reflecting later when using {sign}
    } */
//how should I transverse through the array apart from using for loop,i need to acccess the amount
  return (
    <> 
    <h3>Recent Transactions</h3> 
    <ul  className="list">
        {transactions.map(transaction=>(  <li key={transaction.id} className={transaction.amount<0?'minus':"plus"}>
            {transaction.text}<span>{transaction.amount<0?'-':"+"}Rs{Math.abs(transaction.amount)}</span><button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>X</button>
        </li>))} 
      
    </ul>
    </>
  )
}

export default Transaction