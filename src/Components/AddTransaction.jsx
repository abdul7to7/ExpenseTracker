import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Contexts/GlobalState';

function AddTransaction() {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);

    const onSubmit=(e)=>{
        e.preventDefault()
        const transaction={id:Math.random(),text:text,amount:+amount}
        addTransaction(transaction);
    }
  return (
    <>
        <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Text</label>
                <input type="text" placeholder='Enter Text....'
                value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Amount <br/>
                (negative - expense, positive - income)
                </label>
                <input type='number' placeholder='Enter Amount...'
                value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransaction