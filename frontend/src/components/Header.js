import React, {useState} from 'react';
import {Badge, Button, Nav, Dropdown, Container, FormControl, Navbar} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { CartState } from '../context/Context';

const Header = () => {

  const [user, setUser] = useState(null);
  async function login(user = null) {setUser(user)};
  async function logout() {setUser(null)};

  const {state: {cart}, dispatch, productDispatch} = CartState();

  return (
    <Navbar bg="dark" varient="dark" style={{height: 80}}>
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              <div className='titleName'>
                Shopping Cart
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
            <FormControl 
                style={{width:500}}
                placeholder="Search a product"
                className='m-auto'
                onChange={(e) => {
                    productDispatch({
                      type: "FILTER_BY_SEARCH",
                      payload: e.target.value
                    });
                }}  
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px"/>
                <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{midWidth:370}} align="end">
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>¥ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "90%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                  </>
                ):(
                  <span style={{padding:10}}>Cart is Empty!</span>
                )}
            </Dropdown.Menu>
            </Dropdown>
            { user ? (
              <Button style={{ width: "100%", margin: "0", marginLeft: "50%" }} onClick={logout}>
                Logout {user.name}
              </Button>
            ) : (
              <Link to={"/login"} >
                  <Button style={{ width: "100%", margin: "0", marginLeft: "50%" }}>
                  Login
                  </Button>
              </Link>
            )}      
          </Nav>
        </Container>
    </Navbar>
  )
}

export default Header;