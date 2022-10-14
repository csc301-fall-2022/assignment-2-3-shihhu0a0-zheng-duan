import React, {useState} from 'react';
import { CartState } from '../context/Context';
import productDataService from '../service/productDataService';
import {useNavigate} from 'react-router-dom';
// import { MultiSelect } from "react-multi-select-component";


const Login = () => {

  // const options = [
  //   { label: "a TA", value: "TA" },
  //   { label: "a friend of Zheng Duan", value: "friend" }
  // ];

  const {user, setUser} = CartState();

  const initialSignInState = {
    user_name: "",
    password: "",
    instructor_name: "",
  };
  const [signInState, setsignInState] = useState(initialSignInState)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setsignInState({ ...signInState, [name]: value });
  };
  const navigate = useNavigate();
  const signIn = async () => {
    let flag = false;
    await productDataService.signUpNewUser(signInState)
      .then((response) => {
        setUser(response.data);
        flag = true;
        navigate('/');
      })
      .catch(e => {console.log(e)})
      if(!flag) alert("User exists!")
  }


  return (
    <div className="singInForm">
      <div className='main'>
        <form className="form1">
        <div className='single_select'>
          <div className='left_select'>
              <input type="radio" name='user'/>
              I'm TA
          </div>
          <div className='right_select'>
              <input type="radio" name='user'/>
              I'm friend of Zheng Duan
          </div>
        </div><br/><br/>
          <input id='user_name' required 
            className="username" type="text" placeholder="Username" 
            onChange={handleInputChange} name="user_name" value={signInState.use_name}/>
          <input id='password' required 
            className="password" type="password" placeholder="Password" 
            onChange={handleInputChange} name="password" value={signInState.password}/>
          <input id='instructor_name' required 
            className="username" type="password" placeholder="Who is our Instructor?" 
            onChange={handleInputChange} name="instructor_name" value={signInState.instructor_name}/>
          <div className='text'>
            <b>Note:</b><br/>
            Only those who answer this question correctly <br/>
            will be recognized as TA. <br/>
            My friends <b>cannot</b> add reviews. <br/>
          </div>
          <br/><br/><br/>
          <a className="submit" onClick={signIn} align="center">
            Sign up
          </a>
          <br/><br/>
        </form>
      </div>
         {/* <input type="text" placeholder="Name.." onChange={(e) => {setName(e.target.value)}} />
//         <input type="number" placeholder="Age.."  onChange={(e) => {setAge(e.target.value)}}/>
//         <input type="text" placeholder="Username.."  onChange={(e) => {setUsername(e.target.value)}}/> */}
         {/* <button onClick={createUser}>Create User</button> */}
    </div>
    
  )
}

export default Login