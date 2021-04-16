import {createSlice, configureStore} from '@reduxjs/toolkit';


const sliceC = createSlice({
    name:"Counter",
    initState : {
        value:0
    },
    reducers:{
        increment: state=>{
            state.value += 1
        },
        decrement: state=>{
            state.value -= 1
        }
    }
})

// console.log(slice);

const {increment, decrement} = sliceC.actions;
const store = configureStore({
    reducer: sliceC.reducer
})

// console.log(store.getState())