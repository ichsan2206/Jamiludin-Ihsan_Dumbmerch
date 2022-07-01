import React from "react";
import'../component/LoginStyle.css';

function Login() {
  return (
  
    <div className="loginCard">
    <h1>Login</h1>
      <form className="cardForm" action="">
        <div>
          <div className="inputEmail">
          <input type="text" placeholder="Email" />
          </div>
          <div className="inputPassword">
          <input type="password" placeholder="Password" />
          </div>
          <div className="showPassword">
          
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;