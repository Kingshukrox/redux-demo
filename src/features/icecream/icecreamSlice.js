// const createSlice=require('@reduxjs/toolkit').createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    numberOfIcecreams:10
}

const icecreamSlice=createSlice({
    name:"icecream",
    initialState,
    reducers:{
        buy(state){state.numberOfIcecreams--;},
        restock(state,actions){state.numberOfIcecreams+=actions.payload;}
    }
});

export default icecreamSlice.reducer
// module.exports.icecreamActions=icecreamSlice.actions
export const{buy,restock}=icecreamSlice.actions