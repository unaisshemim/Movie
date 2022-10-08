
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import MediaCard from '../../components/productsList/ProductList'
import { getProducts } from '../../redux/getApi'
import './products.scss'
function Products( ) {

const dispatch=useDispatch()
const movies=useSelector(state=>state.product.currentProduct)

useEffect(()=>{
getProducts(dispatch)
  return ()=>{

getProducts(dispatch)
  }
},[dispatch])





  return (
    <div className='products'>   
    <Navbar/>  
        {movies?.map((value,key)=>{
          return <MediaCard key={key} value={value}/>
        })
      }
     
    </div>
  )
}

export default Products