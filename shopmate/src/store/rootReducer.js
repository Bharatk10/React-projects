
import { combineReducers } from 'redux';
import {cartReducer} from './cartSlice';

const rootReducer = combineReducers({
  cartState: cartReducer,
  
});

export default rootReducer;
