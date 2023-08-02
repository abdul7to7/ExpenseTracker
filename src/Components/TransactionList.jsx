import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalState'

function TransactionList() {

  const {transactions,deleteTransaction}=useContext(GlobalContext);
  //console.log(transactions);
  return (
    <>
    <h3>History</h3>
    <ul className="list">
        {
          transactions?.map(transaction=>(
            <li className={transaction.amount>=0?'plus':'minus'} key={transaction.id}>
            {transaction.text} <span>{transaction.amount}$</span><button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>x</button>
        </li>
          ))
        }
        
    </ul>
    </>
  )
}

export default TransactionList