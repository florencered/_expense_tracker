import React,{createContext,useReducer} from "react" 
import AppReducer from './AppReducer';
//Initial State object 
const initialState={
    transactions:[
        {id: 1, text:"Rent",amount:-4000}, 
        {id: 2, text:"Grocery",amount:-400}, 
        {id: 3, text:"Money Returned",amount:+5000}

    ]
}  
// create context 
export const GlobalContext = createContext(initialState);
//Provider component //this is a syntax
export const GlobalProvider=({children})=>{ //all the info wrappd under globalprovider would be it's children and can be accessed from anywhere
    const [state,dispatch]=useReducer(AppReducer,initialState);  
    //actions(delete an item from the list-->income and expense should get updated automatically) 
    //dispatch in useReducer hook is equivalent to setState in useState API
    //we use dispatch to update the state(usually type),in appReducer different functions would be performed for different states 
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION', 
            payload: id //equivalent to key value pairs 
        })
    } 
    //for the add transaction component  
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION', 
            payload:transaction
        })
    }
     return ( 
        <GlobalContext.Provider value={{
            transactions:state.transactions,
        deleteTransaction,
        addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
     )
}
