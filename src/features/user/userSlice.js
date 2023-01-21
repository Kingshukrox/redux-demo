// const createSlice=require('@reduxjs/toolkit').createSlice
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// const createAsyncThunk=require('@reduxjs/toolkit').createAsyncThunk
// const axios=require('axios')
import axios from "axios";

const initialState={
    loading:false,
    users:[],
    error:""
}

export const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.data)
})

const userSlice=createSlice({
    name:'user',
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchUsers.pending,state=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,actions)=>{
            state.loading=false
            state.users=actions.payload
            state.error=""
        })
        builder.addCase(fetchUsers.rejected,(state,actions)=>{
            state.loading=false
            state.users=[]
            state.error=actions.error.message
        })
    }
})

export default userSlice.reducer
// module.exports.fetchUsers=fetchUsers