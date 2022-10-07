import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import {cartReducer} from './Reducers';
import { productReducer } from './Reducers';
import pic_1 from "../components/normal.jpg";
// import pic_2 from "../components/IMG_1017 copy.jpg";


const Cart = createContext();
faker.seed(99);

const Context = ({children}) => {
    
    const products = [...Array(30)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        image: pic_1,
        inStock: faker.random.numeric(3),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement(['1', '2', '3', '4', '5'])
      }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
      byStock: false,
      byFastDelivery: false,
      byRating: 0,
      searchQuery: "",
    })

  // console.log(products)

  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
  )
}

export default Context

export const CartState = () => {
    return useContext(Cart);
}