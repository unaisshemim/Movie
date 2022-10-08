import {configureStore} from '@reduxjs/toolkit';
import product from './productRedux'
export const store=configureStore({
    reducer:{product}
})