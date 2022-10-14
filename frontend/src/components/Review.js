import React, { useState, useEffect } from "react";
import ProductDataService from "../service/productDataService";
import { Link, useParams } from "react-router-dom";
import CartHeader from "./CartHeader";
import { CartState } from "../context/Context";
import { ThemeState } from '../context/Context';


const Review = () => {

    const {theme, toggleTheme} = ThemeState();

    let param = useParams();
    let id = param.id; 

    const initialProductState = {
        _id: "",
        name: "",
        price: "",
        image: "",
        inStock: 0,
        fastDelivery: false,
        type: "",
        ratings: "",
        reviews: []
    };

    const [product, setProduct] = useState([initialProductState]);

    // const getReview = _id => {
    //     ProductDataService.get(_id)
    //     .then((response) => {
    //     setProducts(response.data.products);
    //   })
    // }

    // useEffect(() => {
    //     getReview(props.match.params._id)
    // }, [props.match.params._id] )

    useEffect(() => {
            ProductDataService.get(id)
            .then((response) => {
            setProduct(response.data);
        }, [] )
    })

  const {user, setUser} = CartState();

  const [reviewText, setReviewText] = useState("");
  const handleInputChange = event => {
    setReviewText(event.target.value);
  };

  const addReview = () => {
    let review = {
      text: reviewText,
      name: user.user_name,
      user_id: user._id,
      product_id: product._id,
    };
    ProductDataService.createReview(review)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

  const deleteReview = (reviewId, index) => {
    ProductDataService.deleteReview(reviewId, user._id)
      // .then(response => {
      //   setProduct((prevState) => {
      //     prevState.reviews.splice(index, 1)
      //     return({
      //       ...prevState
      //     })
      //   })
      // })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
        <CartHeader/>
        {product ? (
        <div id={theme}>
          <h4 className="review_title" id={theme}>{JSON.stringify(product.name)}</h4><br/>
          <div className="row">
              {product.reviews && JSON.stringify(product.reviews) !== '[]' ? (
              product.reviews.map((review, index) => {
                return (
                  <div className="col-lg-4 pb-1" key={index}>
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text">
                        <strong>{review.text}</strong>
                        <br/><br/>
                          By <strong>{review.name}</strong><br/>{review.date}
                        </p>
                        {(user && user._id === review.user_id) ? (
                          <div className="row">
                            <a onClick={() => deleteReview(review._id, user._id)} className="btn btn-info col-lg-5 mx-1 mb-1">Delete</a>
                          </div>) : (<div> </div>)}
                      </div>
                    </div>
                  </div>
                );
              })
              ) : (
              <div className="col-sm-4">
                <div className="card">
                      <div className="card-body">
                        <p className="card-text">
                          <b>No reviews yet.</b>
                        </p>
                      </div>
                    </div>
              </div>
              )}
            </div><br/> 
            {user? (
              <div className='singInForm' id={theme}>
                <form className='reviewForm'>
                  <span>
                    <textarea onChange={handleInputChange} id="addReview" name="addReview" rows="4" cols="55" placeholder="Enter your review here.."/>
                  </span>
                  <br/> 
                  {(user && user.type === "TA") ? (
                    <a onClick={addReview} className="btn btn-primary col-lg-5 mx-1 mb-1">Add a review</a>
                  ) : (
                    <a style={{pointerEvents: 'none'}} onClick={addReview} className="btn btn-secondary col-lg-5 mx-1 mb-1">Add a review</a>
                  )}
                </form>
              </div>
            ):(<div className='singInForm'>Login to add reviews</div>)}
            
        </div>) : (<div>Processing</div>)}
    </div>
  )
}

export default Review