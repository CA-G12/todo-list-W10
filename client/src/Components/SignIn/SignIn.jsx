import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [ userData, setUserData ] = useState({ email:'', password: '' });
  const navigation = useNavigate();
  const submitHandler = e => {
    e.preventDefault();
    axios.post("/user/sign-in", {
      email: userData.email, 
      password: userData.password,
    })
    .then(()=> navigation('/user/profile'))
    .catch(err => console.log(err))
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h1>Form Login</h1>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            value={userData.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            value={userData.password}
          />
        </div>
        
        <input type="submit" value="SignIn" />
      </div>
    </form>
  );
}

export default SignIn