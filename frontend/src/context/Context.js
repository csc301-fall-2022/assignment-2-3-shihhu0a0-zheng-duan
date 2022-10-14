import React, { createContext, useContext, useReducer, useState, useEffect } from 'react'
import { faker } from '@faker-js/faker';
import {cartReducer, productReducer} from './Reducers';

import pic_normal from "../image/normal.jpg";
import pic_better from "../image/better.jpg";
import pic_fancy from "../image/fancy.jpg";
import pic_skull_1 from "../image/skull 1.jpg";
import pic_skull_2 from "../image/skull 2.jpg";
import pic_fish from "../image/sour soup fish.jpg";
import pic_sushi from "../image/sushi.jpg";
import pic_art from "../image/art.jpg";
import pic_shanghai from "../image/shanghai.jpg";
import pic_default from "../image/IMG_1017 copy.jpg";
import ProductDataService from "../service/productDataService";
faker.seed(99);


const ThemeContext = createContext(null);
const Cart = createContext();

const Retrieve_From_LcoalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

const Context = ({children}) => {

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const initialUserState = {
      user_name: "",
      password: "",
      type: "",
    };
    const [user, setUser] = useState(null);

  
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductDataService.getAll()
        .then((response) => {
        setProducts(response.data.products);
        })
        .catch(e => {console.log(e)})
      }, [] )

    // const products = [...Array(30)].map(() => ({
    //     id: faker.datatype.uuid(),
    //     name: faker.commerce.product(),
    //     price: faker.commerce.price(),
    //     image: pic_fancy,
    //     inStock: faker.random.numeric(3),
    //     fastDelivery: faker.datatype.boolean(),
    //     ratings: faker.helpers.arrayElement(['1', '2', '3', '4', '5'])
    //   }));

    const [state, dispatch] = useReducer(cartReducer, { 
      products,
      cart: Retrieve_From_LcoalStorage
    })

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart] )

    products.map((prod) => {
      if (prod.name === "Mediocre bunny") prod.image = pic_better
      else if (prod.name === "Very bad bunny") prod.image = pic_normal
      else if (prod.name === "Good bunny") prod.image = pic_fancy
      else if (prod.name === "The Great Art Work Done By Zheng Duan") prod.image = pic_art
      else if (prod.name === "Akami & Otoro") prod.image = pic_sushi
      else if (prod.name === "Sour Soup Fish") prod.image = pic_fish
      else if (prod.name === "Skull 1") prod.image = pic_skull_1
      else if (prod.name === "Skull 2") prod.image = pic_skull_2
      else if (prod.name === "Shanghai") prod.image = pic_shanghai
      else prod.image = pic_default
    });
    state.products = products

    const [productState, productDispatch] = useReducer(productReducer, {
      byStock: false,
      byFastDelivery: false,
      byRating: 0,
      searchQuery: "",
    })

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Cart.Provider value={{user, setUser, state, dispatch, productState, productDispatch}}>
        {children}
      </Cart.Provider>
    </ThemeContext.Provider>
  )
}

export default Context

export const CartState = () => {
    return useContext(Cart);
}

export const ThemeState = () => {
  return useContext(ThemeContext);
}