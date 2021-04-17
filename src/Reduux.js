// import {createStore} from 'redux';

// const initState = {
//     value:100
// }
// const reducer = (state = initState, action) =>{
//     switch (action.type) {
//         case "increment":
//             return{
//                 value : state.value + 1
//             }
        
//         case "decrement":
//             return{
//                 value : state.value - 1
//             }

    
//         default:
//             return state

//     }
// }


// export const store = createStore(reducer);
// // console.log(store.getState());


// const increment={
//     type: "increment"
// }

// export const Increment = () => {
//     return increment
    
// }
// const decrement={
//     type: "decrement"
// }

// export const Decrement = () => {
//     return decrement
    
// }
// // store.dispatch(Increment())
// // store.dispatch(Decrement())

// // console.log(store.getState());


import axios from "axios"
import { composeWithDevTools } from "redux-devtools-extension"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

const todoReducer=(state={
   todo: []
},action)=>{
    switch(action.type){
        case "FETCH": return {todo: action.payload}
        default : return state
    }
}
export const store=createStore(todoReducer , composeWithDevTools(applyMiddleware(thunk)))

 const getTodos=(payload)=>{
    return{
        type: "FETCH",
        payload
    }
}

export const fetchTodos=()=>{
    return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
            dispatch(getTodos(res.data))
            console.log(res.data)
        })
        
    }
}

