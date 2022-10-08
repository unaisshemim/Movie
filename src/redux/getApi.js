import axios from 'axios';
import { setCurrentProduct } from './productRedux'

export const getProducts=async(dispatch)=>{
    try {
        const res= await axios.get("https://movie-task.vercel.app/api/popular?page=1")
        dispatch(setCurrentProduct(res.data.data.results))
    } catch (error) {
        console.log(error)
    }

}