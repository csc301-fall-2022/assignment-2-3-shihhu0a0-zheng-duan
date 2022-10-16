import React, {useState} from 'react';
import { CartState } from '../context/Context';
import productDataService from '../service/productDataService';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const {user, setUser} = CartState();

  const initialSignInState = {
    user_name: "",
    password: "",
  };

  const [signInState, setsignInState] = useState(initialSignInState)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setsignInState({ ...signInState, [name]: value });
  };

  const navigate = useNavigate();
  const signIn = async () => {
    let flag = false;
    await productDataService.signInUser(signInState)
      .then((response) => {
        setUser(response.data);
        flag = true;
        navigate('/');
      })
      .catch(e => {console.log(e)})
      if(!flag) alert("Incorrect Password")
  }

  return (
    <div>
      <form class="px-4 py-3">
         <div className="submit-form">
           <div>
             <div className="form-group">
               <label htmlFor="user">Username</label>
               <input
                type="text"
                className="form-control"
                id="name"
                required
                value={user.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                className="form-control"
                id="id"
                required
                value={user.id}
                onChange={handleInputChange}
                name="id"
              />
            </div>

            <button className="btn btn-success">
              Login
            </button>
          </div>
         </div>
      </form>
    </div>
  )
}

export default Login
