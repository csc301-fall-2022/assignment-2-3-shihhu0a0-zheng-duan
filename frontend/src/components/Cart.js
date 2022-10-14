import React, { useEffect, useState } from 'react'
import { Button, ListGroup, Row, Col, Form, Image } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import {AiFillDelete} from 'react-icons/ai';
import { CartState } from '../context/Context'
import CartHeader from './CartHeader';
import Rating from './Rating';
import productDataService from '../service/productDataService';
import { ThemeState } from '../context/Context';
// import Axios from 'axios';


const Cart = () => {
  const {theme, toggleTheme} = ThemeState();
  const {state:{cart}, dispatch} = CartState();

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc+Number(curr.price)*(curr.qty), 0))
  }, [cart])

  const [region, setRegion] = useState('Ontario')
  const handleRegion = (e) => {
    if(e === "Shanghai") {alert("太远了, 送不到. \nToo far, cannot reach.")};
    setRegion(e)
  }
  const [curreny, setCurrency] = useState('人民币')
  const handleCurrency = (e) => {setCurrency(e)}
  const [finalTotal, setFinalTotal] = useState(0)

  useEffect(() => {
    productDataService.getTotalPrice(region, total, curreny).then((response) => { 
        setFinalTotal(response.data)
    })
    // Axios.post("http://localhost:5000/api/v1/products/cal", {
    //   region: region, 
    //   price: total,
    //   currency: curreny
    // }).then((response) => { 
    //   setFinalTotal(response.data)
    // })
  }, [total, region, curreny])

  var symbol = {
    "人民币": "¥",
    "新台幣": "NT$",
    "Canadian Dollar": "Can$"
  };

  return (
    <div>
      <CartHeader/>
      <div className='home' id={theme}>
        <div className='productContainer'>
          <ListGroup>
            {cart.map((prod) => (
              <ListGroup.Item key={prod._id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.image} alt={prod.name} fluid rounded />
                  </Col>
                  <Col md={2}>{prod.name}</Col>
                  <Col md={2}>人民币 {prod.price}</Col>
                  <Col md={2}>
                    <Rating rating={(prod.ratings)} />
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={prod.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            _id: prod._id,
                            qty: e.target.value,
                          },
                        })
                      }
                    >
                    {[...Array(Number(prod.inStock)).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        }
                      )
                    }>
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className='filters summary'>
            <span className='title'>subtotal: {cart.length} items</span>
            <div className="container">
              <div class="row">
                <div class="col">
                  <span style={{fontWeight: 700, fontSize: 20}}>Total: {symbol[curreny]} {parseFloat(finalTotal).toFixed(3)}</span>
                </div>
                <div class="col-sm">
                  <Dropdown onSelect={handleCurrency}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {curreny}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey={"人民币"}>人民币</Dropdown.Item>
                      <Dropdown.Item eventKey={"新台幣"}>新台幣</Dropdown.Item>
                      <Dropdown.Item eventKey={"Canadian Dollar"}>Canadian Dollar</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div class="col-sm">
                <Dropdown onSelect={handleRegion}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {region}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey={"Ontario"}>Ontario</Dropdown.Item>
                    <Dropdown.Item eventKey={"BC"}>BC</Dropdown.Item>
                    <Dropdown.Item eventKey={"Alberta"}>Alberta</Dropdown.Item>
                    <Dropdown.Item eventKey={"Shanghai"}>Shanghai</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
              </div>
            </div><br/>
            <Button type='button' disabled={cart.length === 0} 
              onClick={() => {dispatch({type: "RESET"})} 
            }>Check Out</Button>
        </div>
      </div>
    </div>
    
  )
}
export default Cart