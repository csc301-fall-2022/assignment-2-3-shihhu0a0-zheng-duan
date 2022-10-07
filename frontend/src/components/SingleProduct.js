import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from "../context/Context";
import Rating from './Rating'

const SingleProduct = ({prod}) => {

  const {state: {cart}, dispatch} = CartState();

  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image}/>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom:10}}>
            <span>人民币 {prod.price}</span>      {/* .split('.')[0] */}
            {prod.fastDelivery ? (
                <div>Fast Delivery</div>
            ):(
              <div>No Fast Delivery</div>
            )}
            <Rating rating={prod.ratings}/>
          </Card.Subtitle>

          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant='danger'
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
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock? "Out of stock" : "Add to cart"}
            </Button>
        )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct