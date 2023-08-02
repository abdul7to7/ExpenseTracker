import React,{createContext, useReducer} from 'react'

//Initial State
const initialState={
    transactions:
        [{ id:1, text:'flower', amount:-20},
        { id:2, text:'fuel', amount:-200},
        { id:3, text:'salary', amount:10000}
    ]
    
}


//AppReducer
const AppReducer=(state,action)=>{
    switch(action.type){
        case "delete":
            return {
                ...state,
                transactions:state.transactions?.filter((item)=> item.id!==action.payload)
            };
        case "add":
            return {
                ...state, 
                transactions:[...state.transactions, action.payload]
            }    
        default:
            return state;
    }
}


//Create Context
export const GlobalContext=createContext(initialState);

//delete transaction function


//Provider Component
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)
    const deleteTransaction=(id)=>{
        dispatch({
            type:"delete",
            payload:id
        });
    }
    const addTransaction=(transaction)=>{
        console.log(transaction)
        dispatch({
            type:"add",
          payload:transaction
        })
    }
    return (
        <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

