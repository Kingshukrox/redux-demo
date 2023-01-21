// ES6 import
import { createSlice } from "@reduxjs/toolkit";
// const createSlice=require('@reduxjs/toolkit').createSlice

const initialState={
    numberofCakes:10
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        buy(state) {
            state.numberofCakes--;
        },
        restock(state, actions) {
            state.numberofCakes += actions.payload;
        }
    }
});

// ES6 export
// export const{buy,restock}=cakeSlice.actions
// export default cakeSlice.reducer
export default cakeSlice.reducer
export const{buy,restock}=cakeSlice.actions
// module.exports.cakeActions=cakeSlice.actions