import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ProductAPi = createApi({
    reducerPath:"ProductAPi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000"}),
    endpoints: (bulider) =>({
    getAllProducts : bulider.query({
        query: ()=> "products",
       
    })
    })
})

export const {useGetAllProductsQuery} = ProductAPi;