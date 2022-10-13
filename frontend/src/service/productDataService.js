import axios from "axios";


const http =  axios.create({
  baseURL: "http://localhost:5001/api/v1",
  timeout: 1000,
  headers: {
    "Content-type": "application/json;charset=utf-8"
  }
});

class ProductDataService {
    getAll(page = 0) {
      return http.get(`/products?page=${page}`);
    }
  
    get(id) {
      return http.get(`/products/id/${id}`);
    }
  
    find(query, by = "name", page = 0) {
      return http.get(`products?${by}=${query}&page=${page}`);
    } 

    getTotalPrice(region, price, currency) {
      return axios.post("http://localhost:5001/api/v1/products/cal", {
        region: region, 
        price: price,
        currency: currency
      })
    }
  
    createReview(data) {
      return http.post("/review-new", data);
    }
  
    updateReview(data) {
      return http.put("/review-edit", data);
    }
  
    deleteReview(id, userId) {
      return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
    }
  
    getTypes(id) {
      return http.get(`/types`);
    }
  
  }
  
  export default new ProductDataService();
