export default (state,action)=>{
    switch(action.type){ 
        case 'DELETE_TRANSACTION': 
        return{ //update the state  
            ...state, //bring down initial state 
            transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)

        } 
        case 'ADD_TRANSACTION':
            return{
                ...state, 
                transactions:[action.payload,...state.transactions]
            }
        default: 
        return state;
    }
}