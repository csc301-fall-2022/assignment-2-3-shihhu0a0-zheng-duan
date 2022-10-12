import React, {useState} from 'react';


const Login = () => {

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