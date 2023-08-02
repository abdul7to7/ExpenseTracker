import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalState'

function Income_Expenses() {
  const {transactions}=useContext(GlobalContext);

  const totalIncome=transactions?.reduce((acc,transaction)=>(transaction.amount>0?transaction.amount+acc:acc),0);

  const totalSum=transactions?.reduce((acc,transaction)=>(acc+transaction.amount),0)
  return (
    <div className='inc-exp-container'><div>
        <h4>Income</h4>
        <p id="money-plus" className='money plus'>+{totalIncome}$</p>
    </div>
    <div>
        <h4>Expense</h4>
        <p id="money-minus" className='money minus'>{totalSum-totalIncome}$</p>
    </div>
    </div>
  )
}

export default Income_Expenses