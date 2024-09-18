import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";
import { RootState } from "../store";


const initals:User={
    email:'',
    id:0,
    name:'',
    role:'member_user'
}

export const AuthSlice = createSlice({
    name:'AuthSlice',
    initialState:{user:initals},
    reducers:{
        setUser:(state,action:{payload:User})=>{
            state.user= action.payload
        },
        removeUser:(state)=>{
            state.user= {
                email:'',
                id:0,
                name:'',
                role:'member_user'
            }
        }
    }
})

export const { setUser,removeUser} = AuthSlice.actions;

export const AuthSlicePath = (state:RootState)=>state.AuthSlice.user;