import {createStore} from 'redux';

const initState = {
    value:100
}
const reducer = (state = initState, action) =>{
    switch (action.type) {
        case "increment":
            return{
                value : state.value + 1
            }
        case "decrement":
            return{
                value : state.value - 1
            }

    
        default:
            return state

    }
}


export const store = createStore(reducer);
// console.log(store.getState());


const increment={
    type: "increment"
}

export const Increment = () => {
    return increment
    
}
const decrement={
    type: "decrement"
}

export const Decrement = () => {
    return decrement
    
}
// store.dispatch(Increment())
// store.dispatch(Decrement())

// console.log(store.getState());



