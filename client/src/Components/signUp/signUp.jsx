import React from "react";
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
<div id="form">
<h1>sign up</h1>
<input type="text" placeholder="your nickname" class="nickname" value={userName}
    onChange={(e) => setUserName(e.target.value )}
/>
<input type="email" placeholder="your email"  class="email" value={email}
    onChange={(e) => setEmail(e.target.value )}
/>
<input type="password" placeholder="your password" class="password" value={password}
    onChange={(e) => setPassword(e.target.value )}
/> 
<input type="password" placeholder="repeat your password" class="repeatPassword" value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value )}
/>
<span class="psw">already have an account? <a href="/user/sign-in">Sign in</a></span>
<span class="feedback" >{feedback}</span>
<button type="submit" class="signUp"  onClick={getData}>Sign Up</button>
<h1>{userName}</h1>
<h1>{email}</h1>
<h1>{password}</h1>
<h1>{confirmPassword}</h1>
</div>




    );
  }

export default SignUp;