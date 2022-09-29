import React from "react";
import "./signUp.css";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
function SignUp () {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [feedback, setFeedback] = useState('');
    const navigation = useNavigate();
    const getData = () => {
        const formData = {
            name:userName,
            email,
            password,
        }
        fetch('/user/sign-up', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }).then((data) => data.json())
          .then((data) => {
            if(data.state == 'success'){
                navigation('/user/profile');
            }
            setFeedback(data.message);
          }).catch((err)=>console.log(err))
        setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
      <div id="form" className="form-container">
        <div className="wrapper">
          <h1>SIGN UP</h1>

          <form className="form">
            <label className="text-bold">Name</label>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <label class="text-bold">Email</label>
            <div className="search-bar">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <label class="text-bold">Password</label>
            <div className="search-bar">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <label class="text-bold">Confirm Password</label>
            <div className="search-bar">
              <input
                type="password"
                placeholder="Repeat Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary" onClick={getData}>
              Sign Up
            </button>
          </form>

          <div className="sign-txt">
            Already have an account? <a href="/user/sign-in">SIGN IN</a>
            <span class="feedback">{feedback}</span>
          </div>
        </div>
      </div>
    );
}

export default SignUp;