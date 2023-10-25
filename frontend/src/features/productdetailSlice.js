import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    productItem:[]
}


const ProductdetailSlice = createSlice({

    name:"Productdetail",
    initialState,
    reducers:{
         
        details(state,action){

            
            if(state.productItem.length===0){
                state.productItem.push(action.payload);
            }else if(state.productItem.length ===1){
               const remove = state.productItem.findIndex((Item) => Item.id === 2)
                state.productItem.pop(remove);
                state.productItem.push(action.payload)
            }

        }

    }
})

export const{details} = ProductdetailSlice.actions;

export default ProductdetailSlice.reducer;