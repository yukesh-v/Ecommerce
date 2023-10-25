import {  createSlice } from "@reduxjs/toolkit";


const initialState = {
    Checkoutproduct:[]
};


const checkoutslice = createSlice({
    name:"checkout",
    initialState,
    reducers:{
          
        getallcarts(state,action){
           
            if(state.Checkoutproduct.length === 0){
                state.Checkoutproduct.push(action.payload)
            }else if(state.Checkoutproduct.length ===1){
               const remove = state.Checkoutproduct.findIndex(Item => Item.id===2)

               state.Checkoutproduct.pop(remove);
               state.Checkoutproduct.push(action.payload);
            }
        }
    }
});

export const {getallcarts} = checkoutslice.actions;
export default checkoutslice.reducer;