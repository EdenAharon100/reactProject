import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    details: {address:"",dueDate : new Date(),sumPrice:0,allCount:0},
    basket : []
}

export const OrderSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
      addToBasket: (state, action) => {
        const { _id, Name,Price,src } = action.payload;
        console.log(action.payload);
        const existingProductIndex = state.basket.findIndex((item) => item._id === _id);
  
        if (existingProductIndex !== -1) {
          // Product already exists, update quantity
          state.basket[existingProductIndex].amount += 1;
        } else {
          // Product does not exist, add to basket
          let a={ _id, Name:Name, Price,amount: 1,src }
          console.log(a)
          state.basket.push(a);
        }
      },

      removeFromBasket: (state, action) => {
        const {_id}=action.payload;
        const existingProductIndex = state.basket.findIndex((item) => item._id === _id);
        if(existingProductIndex==-1){
        alert("מוצר לא קיים")
        return}
        if (state.basket[existingProductIndex].amount > 1) {
          state.basket[existingProductIndex].amount -= 1;
        } else {
          // let a={ _id, Name:Name, Price,amount: 1 }
          state.basket = state.basket.filter((item) => item._id !== _id);
        }},},
        
      });
  
  
  export const { addToBasket, removeFromBasket } = OrderSlice.actions;
  export default OrderSlice.reducer;