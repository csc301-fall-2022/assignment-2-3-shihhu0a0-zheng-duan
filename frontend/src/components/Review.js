import React, { useState, useEffect } from "react";
import ProductDataService from "../service/productDataService";
import { Link, useParams } from "react-router-dom";
import CartHeader from "./CartHeader";

const Review = () => {

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

  return (
    <div>
        <CartHeader/>
        <h4>{product.name}</h4>
        <div className="row">
            {product.reviews ? ( // this part doesn't work
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
                     </div>
                   </div>
                 </div>
               );
             })
            ) : (
            <div className="col-sm-4">
              <p>No reviews yet.</p>
            </div>
            )}
          </div>
    </div>
  )
}

export default Review