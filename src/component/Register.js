import React from 'react'
import'../component/RegisterStyle.css';

export default function Register() {
  return (
    <div className="loginCard">
    <h1>Register</h1>
      <form className="cardForm" action="">
        <div>
        <div className="inputName">
          <input type="text" placeholder="Name" />
          </div>
          <div className="inputEmail">
          <input type="text" placeholder="Email" />
          </div>
          <div className="inputPassword">
          <input type="password" placeholder="Password" />
          </div>
          <div className="showPassword">
          
          </div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}
