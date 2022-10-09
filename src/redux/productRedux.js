
import {createSlice} from '@reduxjs/toolkit';

const productSlice=createSlice({
    name:'product',
    initialState:{
        currentId:0,
        currentProduct:[],
        filterProduct:[],
        searchProduct:""
        

    },
    reducers:{
        setCurrentId:(state,action)=>{
            state.currentId=action.payload
        },
        setCurrentProduct:(state,action)=>{
            state.currentProduct=action.payload
        },setFilterProduct:(state,action)=>{
        
           state.filterProduct=state.currentProduct;
            state.currentProduct =  state.currentProduct.map(value=>{
                  return {...value,date:new Date(value.release_date)}
              })
            if(action.payload.date==="dec"){
               state.currentProduct=state.currentProduct.sort((a,b)=>a.date-b.date)
            }else if (action.payload.date ==="asc"){
                state.currentProduct=state.currentProduct.sort((a,b)=>b.date-a.date)
            }else{
                state.currentProduct=state.filterProduct
            }

        },setFilterRating:(state,action)=>{
            console.log(action.payload)
            if(action.payload.rating==="dec"){
                state.currentProduct=state.currentProduct.sort((a,b)=>b.vote_average-a.vote_average)
            }else{
                state.currentProduct=state.currentProduct.sort((a,b)=>a.vote_average-b.vote_average)
            }

        },searchProduct:(state,action)=>{
           state.searchProduct=action.payload
    
        }
    }
})
export const {setCurrentId,setCurrentProduct,setFilterProduct,setFilterRating,searchProduct}=productSlice.actions;
export default productSlice.reducer;