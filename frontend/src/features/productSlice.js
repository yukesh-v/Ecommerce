import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items:[],
    status:null

}
export const ProductsFetch = createAsyncThunk(
  
    "products/productFetch",
    async() =>{
        const response = await axios.get("http://localhost:4000/products")
        return response?.data
    }

) 
const ProductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:{
      
        [ProductsFetch.pending]: (state) =>{
            state.status="pending"
        },
        [ProductsFetch.fulfilled]:(state,action) =>{
            state.status ="success"
            state.items = action.payload
        },
        [ProductsFetch.rejected]:(state) =>{
            state.status="pending"
        }
    }
})

export default ProductSlice.reducer;