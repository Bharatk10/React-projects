import { createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    
    initialState: {
        cartList: [],
        total: 0
    },

    reducers: {
        add(state, action){
            state.cartList.push(action.payload)
            state.total = state.total + action.payload.price;
            return state;
        },
        remove(state,action){
            state.cartList = state.cartList.filter((prod)=>(prod.id !== action.payload.id))
            state.total = state.total - action.payload.price;
            return state;
        }
    }
})



export const {add, remove} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;