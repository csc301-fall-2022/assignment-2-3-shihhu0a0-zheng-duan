import React, {useState} from 'react';
import {Badge, Button, Nav, Dropdown, Container, FormControl, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { CartState, ThemeState } from '../context/Context';
import ReactSwitch from "react-switch";

const CartHeader = () => {

  const {user, setUser, state: {cart}, dispatch, productDispatch} = CartState();
  const {theme, toggleTheme} = ThemeState();
  

  return (
    <Navbar bg="dark" varient="dark" style={{height: 80}}>
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              {user? (
                  <div className='titleName'>
                    {user.user_name}
                  </div>
                ):(
                  <div className='titleName'>
                    Shopping Cart
                  </div>
                )}
            </Link>
          </Navbar.Brand>
          
          <Nav>
            <Link to="/home">
                <Button style={{ width: "90%", margin: "0 10px" }}>
                  Back to Home Page
                </Button>
            </Link>
            { user ? (
                <Link to={"/"} >
                  <Button style={{ width: "100%", margin: "0", marginLeft: "10%" }} onClick={() => {setUser(null)}}>
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link to={"/login"} >
                    <Button style={{ width: "100%", margin: "0", marginLeft: "10%"}}>
                    Login
                    </Button>
                </Link>
              )}    
          </Nav>
        </Container>
        <div className="switch_cart">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div> 
    </Navbar>
  )
}

export default CartHeader;