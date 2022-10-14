import React, {useEffect} from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from "../context/Context"
import Rating from './Rating'
import {Link, useNavigate} from 'react-router-dom'


const SingleProduct = ({prod}) => {

  const {state: {cart}, dispatch} = CartState();

  // const navigate = useNavigate();
  // const passId = (id) => {
  //   navigate("/products/"+prod._id);
  // };

  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} className="card-img"/>
        <Card.Body>
          <Card.Title>{prod.name} -- {prod.type}</Card.Title>
          <Card.Subtitle style={{paddingBottom:10}}>
            <span>Chinese Yuan: {prod.price}</span>      {/* .split('.')[0] */}
            {prod.fastDelivery ? (
                <div>Fast Delivery</div>
            ):(
              <div>No Fast Delivery</div>
            )}
            <Rating rating={prod.ratings}/>
          </Card.Subtitle>
          <div>
            {cart.some((p) => p._id === prod._id) ? (
              <Button
                variant= "light"
                size= "sm"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }
              >
                Remove from Cart
              </Button>
            ) : (
              <Button 
                size="lg"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  })
                }}
                disabled={!prod.inStock}
              >
                {!prod.inStock? "Out of stock" : "Add to cart"}
              </Button>
          )}
          <Link to={"/products/"+prod._id}
            className="btn btn-info col-lg-5 mx-1 mb-1 ms-2"
          >
            View Reviews
          </Link>
          {/* <Button onClick={passId}
            className="btn btn-info col-lg-5 mx-1 mb-1 ms-2"
          >
            View Reviews</Button> */}
        </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct