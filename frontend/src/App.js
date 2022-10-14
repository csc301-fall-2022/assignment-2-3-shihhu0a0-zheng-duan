import React , {createContext, useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
// import Header from "./components/Header";
import Home from './components/Home';
import Cart from './components/Cart';
import addReview from './components/addReview';
// import pic from './components/normal.jpg';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Review from './components/Review';


function App(){

  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
          <Routes>
            <Route path='/login' element={<Login/>}/>
          </Routes>
          <Routes>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
          <Routes>
            <Route path='/home' element={<Home/>}/>
          </Routes>
          <Routes>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Routes>
            <Route 
              path="/products/:id"
              element={<Review />}
            />
          </Routes>
        </div>
    </BrowserRouter>
  );
} 
export default App;
