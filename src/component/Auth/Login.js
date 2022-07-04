import React from "react";
import'./LoginStyle.css';
// import './StartStyle.css';
import LogoDW from '../img/Frame.png'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='posisi'>
    <div className='container'>
      <div className='content'>
        <div>
          <img src={LogoDW} alt=''></img>
        </div>
        <div>
          <h1 className='h1s fs-1'>Easy, Fast and Reliable</h1>
          <div className='text'>
          <p className="fs-7">Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
          </div>
        </div>
        <div className='buttonGroup'>
          <button className='buttonLogin'>Login</button>
          <Link to='/Register'><button className='buttonRegister'>Register</button></Link>
        </div>
      </div>
<div className='form'>
<div className="loginBg">
    <div className="loginContainer">
      <div className="loginCard">
    <h1 className='fs-3'>Login</h1>
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
</div>
</div>
</div>
  </div>
  </div>
  );
}

export default Login;