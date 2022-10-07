import React, {useState} from 'react';
import {Badge, Button, Nav, Dropdown, Container, FormControl, Navbar} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { CartState } from '../context/Context';

const CartHeader = () => {

  const [user, setUser] = useState(null);
  async function login(user = null) {setUser(user)};
  async function logout() {setUser(null)};

  const {state: {cart}, dispatch, productDispatch} = CartState();

  return (
    <Navbar bg="dark" varient="dark" style={{height: 80}}>
        <Container>
          <Navbar.Brand>
            <Link to='/' exact>
              <div className='titleName'>
                Shopping Cart
              </div>
            </Link>
          </Navbar.Brand>
          
          <Nav>
            <Link to="/home">
                <Button style={{ width: "90%", margin: "0 10px" }}>
                  Back to Home Page
                </Button>
            </Link>
            { user ? (
                <Button style={{ width: "100%", margin: "0", marginLeft: "50%" }} onClick={logout}>
                  Logout {user.name}
                </Button>
              ) : (
                <Link to={"/login"} >
                    <Button style={{ width: "100%", margin: "0", marginLeft: "50%"}}>
                    Login
                    </Button>
                </Link>
              )}   
          </Nav>
        </Container>
    </Navbar>
  )
}

export default CartHeader;