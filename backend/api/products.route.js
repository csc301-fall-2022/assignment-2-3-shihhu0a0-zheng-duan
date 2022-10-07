import express from 'express';
import ProductsCtrl from './products.controller.js';
import ReviewCtrl from './reviews.controller.js';

const router = express.Router();
router.route("/").get(ProductsCtrl.apiGetProducts)
router.route("/id/:id").get(ProductsCtrl.apiGetProductById)
router.route("/types").get(ProductsCtrl.apiGetProductTypes)

router
    .route("/review")
    .post(ReviewCtrl.apiPostReview)
    .put(ReviewCtrl.apiUpdateReview)
    .delete(ReviewCtrl.apiDeleteReview)

export default router