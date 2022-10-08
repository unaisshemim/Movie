import React from 'react'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SelectSmall from '../Filter/Filter'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import {searchProduct} from '../../redux/productRedux'



const Navbar = ()=> {
const dispatch=useDispatch()
 
  const inputChange=(e)=>{
    dispatch(searchProduct(e.target.value))

    
    
  }
  
  return (
    <div className='navbar-container'>
        <div className="navbar-left">
            <SelectSmall/>
        </div>
        <div className="navbar-center">
            <LiveTvIcon fontSize='large' className='icon'/>
        </div>
        <div className="navbar-right">
         
            <input className="form-control input" type="text" placeholder="Search" aria-label="Search" onChange={inputChange} />
            <SearchIcon className='search-icon' fontSize='large' />

          
        </div>
    </div>
  )
}

export default Navbar