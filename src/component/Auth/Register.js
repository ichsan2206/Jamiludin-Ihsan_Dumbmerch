import React from 'react'
import'./RegisterStyle.css';
import { Link } from 'react-router-dom';
import LogoDW from '../img/Frame.png'

export default function Register() {
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
          <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
          </div>
        </div>
        <div className='buttonGroup'>
          <Link to='/'><button className='buttonLogin'>Login</button></Link>
          <Link to='/Register'><button className='buttonRegister'>Register</button></Link>
        </div>
      </div>
<div className='form'>
<div className="loginBg">
    <div className="loginContainer">
    <div className="loginCard">
    <h1 className='fs-3'>Register</h1>
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
</div>
</div>
</div>
  </div>
  </div>
  )
}
