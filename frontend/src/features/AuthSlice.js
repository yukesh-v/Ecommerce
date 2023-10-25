import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    account: localStorage.getItem("account")? JSON.parse(localStorage.getItem("account")): []
}



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        login(state, action) {

            state.account.push(action.payload);
            localStorage.setItem("account", JSON.stringify(state.account));
        },

        logout(state, action) {

        if(state.account.length ===1){
            const remove = state.account.findIndex((acc) => acc.id === 1)
             state.account.pop(remove);
            
             localStorage.setItem("account", JSON.stringify(state.account));
             
        }
           
        }
    }
})
export const { login,logout } = authSlice.actions;

export default authSlice.reducer;