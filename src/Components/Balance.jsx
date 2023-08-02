import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalState'

function Balance() {
  const {transactions}=useContext(GlobalContext);

  

  const totalSum=transactions?.reduce((acc,transaction)=>(acc+transaction.amount),0);
  
  console.log(totalSum)

  return (
    <>
        <h4>Your Balance</h4>
        <h1>{totalSum}$</h1>
    </>
  )
}

export default Balance