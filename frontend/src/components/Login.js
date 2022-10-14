import React, {useState} from 'react';
import { CartState } from '../context/Context';
import productDataService from '../service/productDataService';
import {useNavigate} from 'react-router-dom';

const Login = () => {

  // const options = [
  //   { label: "a TA", value: "TA" },
  //   { label: "a friend of Zheng Duan", value: "friend" }
  // ];

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
    <div className="singInForm">
      <div className='main_login'>
        <form className="form1">
          <br/>
          <input id='user_name' required 
            className="username" type="text" placeholder="Username" 
            onChange={handleInputChange} name="user_name" value={signInState.use_name}/>
          <input id='password' required 
            className="password" type="password" placeholder="Password" 
            onChange={handleInputChange} name="password" value={signInState.password}/>
          <br/><br/><br/>
          <a className="submit" onClick={signIn} align="center">
            Sign in
          </a>
          <br/><br/>
          <div className="forgot" align="center">
            <a onClick={() => {navigate('/signup')}}>Don't have an account? Sign up!</a>
          </div>
          <div className="forgot" align="center">
            <a onClick={() => {alert("So Sad   :))))) 哈哈哈哈哈")}}>Forgot Password? </a>
          </div>
        </form>
      </div>

  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
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
         {/* <input type="text" placeholder="Name.." onChange={(e) => {setName(e.target.value)}} />
//         <input type="number" placeholder="Age.."  onChange={(e) => {setAge(e.target.value)}}/>
//         <input type="text" placeholder="Username.."  onChange={(e) => {setUsername(e.target.value)}}/> */}
         {/* <button onClick={createUser}>Create User</button> */}
    </div>
    
  )
}

export default Login
