import React , {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
// import Header from "./components/Header";
import Home from './components/Home';
import Cart from './components/Cart';
import addReview from './components/addReview';
// import pic from './components/normal.jpg';
import Login from './components/login';

function App(){
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
          <Routes>
            <Route exact path='/login' element={<Login/>}/>
          </Routes>
          <Routes>
            <Route exact path='/home' element={<Home/>}/>
          </Routes>
          <Routes>
            <Route exact path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
        
    </BrowserRouter>
  );
} 
export default App;
