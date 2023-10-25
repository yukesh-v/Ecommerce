import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

const initialState= {
    whishlistItem:[],
    quantity:0
};


const WhislistSlice = createSlice({

    name:"Whishlist",
    initialState,
    reducers:{
        addwhishlist(state,action){

            const itemIndex = state.whishlistItem.findIndex((items) => items.id === action.payload.id)
            if (itemIndex >= 0) {
                toast.info("Already Added to whishlist", {
                    position: "top-right",
                    theme:"colored"
                });
            }else{
                 
                state.whishlistItem.push(action.payload)
                toast.success('Added to Whishlist', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    
            state.quantity = state.whishlistItem.length
            }
            
        },

        removewhishlist(state,action){
            const nextcartitem = state.whishlistItem.filter((cartItem) => cartItem.id !== action.payload.id);

            state.whishlistItem = nextcartitem;
            toast.info("Removed from Whishlist", {
                position: "top-right"
            });
            state.quantity = state.whishlistItem.length
        }
    }
});

export const{addwhishlist,removewhishlist} = WhislistSlice.actions;

export default WhislistSlice.reducer;