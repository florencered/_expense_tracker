import React from 'react' 
import { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'
import Transaction from './Transaction'
const Balance = () => { 
   const {transactions}=useContext(GlobalContext);
  const amounts=transactions.map(transaction=>transaction.amount); 
 const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  return ( 
    <>
    <h4 className='fw-bold'>Your Balance</h4> 
    <h2 id="balance" className='fw-bold'>Rs {total}</h2> 
    </>
  )
}

export default Balance