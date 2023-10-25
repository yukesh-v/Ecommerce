import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
const initialState = {

    CartItems: localStorage.getItem("CartItems") ? JSON.parse(localStorage.getItem("CartItems")) : [],
    CartTotalQuantity: 0,
    CartTotalAmount: 0
};

const cartSlice = createSlice({

    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            const itemIndex = state.CartItems.findIndex((items) => items.id === action.payload.id)
            if (itemIndex >= 0) {
                state.CartItems[itemIndex].CartQuantity += 1;
                toast.info("Quantity is increase", {
                    position: "top-right"
                });
            } else {
                const tempProduct = { ...action.payload, CartQuantity: 1 };
                state.CartItems.push(tempProduct)
                toast.success("added to cart", {
                    position: "top-right"
                });
                
            }
            localStorage.setItem("CartItems", JSON.stringify(state.CartItems));
        },

        RemoveFromCart(state, action) {

            const nextcartitem = state.CartItems.filter((cartItem) => cartItem.id !== action.payload.id);

            state.CartItems = nextcartitem;
            localStorage.setItem("CartItems", JSON.stringify(state.CartItems));
            toast.info("Product removed from cart", {
                position: "top-right"
            });

        },
        DecreaseCart(state,action){
            const itemIndex = state.CartItems.findIndex((cartItem) => cartItem.id === action.payload.id);

            if(state.CartItems[itemIndex].CartQuantity > 1){
                 state.CartItems[itemIndex].CartQuantity -= 1;
                 toast.info("Product quantity is decrease", {
                    position: "top-right"
                });
            }else if(state.CartItems[itemIndex].CartQuantity === 1){
                const nextcartitem = state.CartItems.filter((cartItem) => cartItem.id !== action.payload.id);

            state.CartItems = nextcartitem;
            
            toast.info("Product removed from cart", {
                position: "top-right"
            });
            }
            localStorage.setItem("CartItems", JSON.stringify(state.CartItems));
        },
        getTotal(state,action){
         let {total ,quantity} = state.CartItems.reduce((cartTotal,cartItem)=>{
                    const {price ,CartQuantity} = cartItem;
                    const itemtotal = price*CartQuantity;

                    cartTotal.total += itemtotal;
                    cartTotal.quantity += CartQuantity;
 return cartTotal
            },{

                total:0,
                quantity:0
            })

            state.CartTotalQuantity = quantity;
            state.CartTotalAmount = total;
        }
    }
});

export const { addToCart, RemoveFromCart ,DecreaseCart ,getTotal } = cartSlice.actions;

export default cartSlice.reducer;