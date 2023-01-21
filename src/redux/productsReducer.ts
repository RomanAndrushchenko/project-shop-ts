import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type ProductsProps = {
    id: number
    name: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

const initialState:ProductsProps[]=[]

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async()=>{
        const responce = await axios.get('')
        return responce.data.products
    }
) 

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(prevState,action)=>{
            return (prevState = action.payload)
        })
    },
})

export default productsSlice.reducer