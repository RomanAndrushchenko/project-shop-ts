import { createSlice } from '@reduxjs/toolkit'

type LikeProductsState = {
    [id:number]:boolean
}
const initialState:LikeProductsState = {
    1:true,
    4:true
}

export const likeSlice = createSlice({
    name:"like",
    initialState,
    reducers:{
        
    }
  })

  export default likeSlice.reducer