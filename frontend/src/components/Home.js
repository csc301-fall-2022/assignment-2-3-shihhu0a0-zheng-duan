import React, {useState, useEffect} from 'react';
import {CartState} from '../context/Context';
import SingleProduct from './SingleProduct';
import Filters from './Filters';
import './styles.css';
import Header from './Header';
import { ThemeState } from '../context/Context';


const Home = () => {
  const {theme, toggleTheme} = ThemeState();

  const {state:{products}, productState: {byStock, byFastDelivery, sort, byRating, searchQuery},} = CartState()

  const transformProducts = () => {
    let sortedProducts = products;
    if(sort){
      sortedProducts = sortedProducts.sort((a, b) => (
          sort==="lowToHigh" ? a.price-b.price : b.price-a.price
      ))
    }
    if(!byStock){
      sortedProducts = sortedProducts.filter(prod => prod.inStock!==0);
    }
    if(byFastDelivery){
      sortedProducts = sortedProducts.filter(prod => prod.fastDelivery);
    }
    if(byRating){
      sortedProducts = sortedProducts.filter(prod => prod.ratings >= byRating);
    }
    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
    }

    return sortedProducts;
  };

  return (
  <div>
    <Header/>
    <div className='home' id={theme}>
        <Filters />
        <div className='productContainer'>
          {transformProducts().map((prod) => {
            return <SingleProduct prod={prod} key={prod._id}/>;
          })}
        </div>
      </div>
  </div>
  )
}

export default Home