import React from 'react'
import { GlobalContext } from './context/GlobalState' 
import { useContext } from 'react'
const IncomeExpenses = () => { 
  const {transactions}=useContext(GlobalContext); 
  //access all the amounts in the transactions array using map function 
  const amounts=transactions.map(transaction=>transaction.amount);  
  //calcuate the sum total of all amounts using the reduce method
  //calculate the income by addding all the +ve numbers 
  //filter all the positive number-->add them using reduce-->round them off tho the nearet first place decimal 
  const income=
   amounts.filter(item=>item>0)
   .reduce((acc,item)=>(acc+=item),0)
   .toFixed(2); 
   //similarly for expenses 
   //filter all the negative items,add them using reducer and round them off tp the firrs two decimal places 
   const expense=
   (amounts.filter(items=>items<0)
   .reduce((acc,item)=>(acc+=item),0)*-1)
   .toFixed(2)

  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4> 
            <p id="money-plus" className="money plus">+Rs {income}</p>
        </div> 
        <div>
            <h4>Expense</h4> 
            <p id='money-minus' className='money minus'>- Rs {expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses