
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery : fetchBaseQuery({
        baseUrl:"http://localhost:4000"
    }),
    endpoints:(builder) => ({
        getProducts : builder.query({
            query: ()=> ({
              url: "/products"
            })
        }),
        addProduct : builder.mutation({
            query:(data)=>({
                url:"/product",
                method:"POST",
                body: data,
            })
        }),
        removeProduct : builder.mutation({
            query:(id)=>({
                url: `/product/${id}`,
                method:"DELETE"
            }),
        })

    })
});

export const {useGetProductsQuery,useAddProductMutation,useRemoveProductMutation} = productApi; 