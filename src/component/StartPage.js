import React from 'react'
import'../component/StartStyle.css'
import LogoDW from '../img/Frame.png'
import Login from './Login'
import {Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom';
import Register from './Register'

const StartPage = () => {
  return (
    <div className='posisi'>
    <div className='container'>
      <div className='content'>
        <div>
          <img src={LogoDW} alt=''></img>
        </div>
        <div>
          <h1 className='h1s'>Easy, Fast and Reliable</h1>
          <div className='text'>
          <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
          </div>
        </div>
        <div className='buttonGroup'>
          <Link to='Login'><button className='buttonLogin'>Login</button></Link>
          <Link to='Register'><button className='buttonRegister'>Register</button></Link>
        </div>
      </div>
<div className='form'>
<div className="loginBg">
    <div className="loginContainer">
      <Routes>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Register' element={<Register />}/>
      </Routes>
</div>
</div>
</div>
  </div>
  </div>
  )
}

export default StartPage;
