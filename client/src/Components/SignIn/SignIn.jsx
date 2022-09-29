import React from 'react'
import './signIn.css'
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
    <div className="form-container">
      <div className="wrapper">
        <h1>SIGN IN</h1>

        <form className="form" onSubmit={submitHandler}>
          <label class="text-bold">Email</label>
          <div className="search-bar">
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              value={userData.email}
            />
          </div>

          <label class="text-bold">Password</label>
          <div className="search-bar">
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              value={userData.password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            SIGN IN
          </button>
        </form>

        <div className="sign-txt">
          Not yet member? <a href="/user/sign-up">SIGN UP</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn