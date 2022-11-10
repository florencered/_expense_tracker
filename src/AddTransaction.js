import React from 'react'
import { useState } from 'react' 
import { useContext  } from 'react'; 
import { GlobalContext } from './context/GlobalState';
const AddTransaction = () => { 
    const [text,setText]=useState(''); 
    const [amount,setAmount]=useState(0); 
   const {addTransaction} =useContext(GlobalContext); 
   const onSubmit=(e)=>{
          e.preventDefault(); //prevents the page from redirecting to another page 
          //generating a new id to  the newly added transaction
          const newTransaction={
            id:Math.floor(Math.random()*10000), 
            text, 
            amount:+amount //new transaction has now been changed from a string to a number

          } 
          addTransaction(newTransaction);
          
   }
  return ( 
    <>
     <h3>Add new Transaction</h3> 
    <form onSubmit={onSubmit}> 
        <div className='form-control'>
            <label htmlFor="text">Transaction Type</label> 
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}placeholder='Enter text...'/>
        </div> 
        <div className='form-control'>
            <label htmlFor='amount'>Enter Amount<br/>(negative - expense, positive - income)</label> 
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div> 
        <button className="btn">Add transaction</button>

    </form> 
    </> 
  ) 
}

export default AddTransaction