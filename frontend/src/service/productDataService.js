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

    signUpNewUser(data) {
      return axios.post("http://localhost:5001/api/v1/products/user", data);
    }

    signInUser(data) {
      return axios.post("http://localhost:5001/api/v1/products/name", data);
    }
  
    createReview(data) {
      return axios.post("http://localhost:5001/api/v1/products/review", data);
    }

    deleteReview(id, userId) {
      return  axios.delete("http://localhost:5001/api/v1/products/review", {data:{id: id, user_id: userId}});
    }
  
    updateReview(data) {
      return http.put("/review", data);
    }
  
    getTypes(id) {
      return http.get(`/types`);
    }
  
  }
  
  export default new ProductDataService();
