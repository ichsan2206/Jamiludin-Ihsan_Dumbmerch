import React from 'react'
import NavbarAdmin from '../Navbar/NavbarAdmin'
import '../User/ComplainStyle.css'

export default function ComplainAdmin() {
  return (
    <div>
 <div>
        <NavbarAdmin />
        <div className='postComplain'>
        <div className='containerComplain'>
            <div className='listChat'>
            <div className='chat'>
            <img src='http://raw.cdn.baca.co.id/42c670c0-ac01-4d46-8fbc-d670d3bfda2b' alt='' />
            <div className='viewChat'>
                <h1>egi_lol</h1>
                <p>Hello Admin, I Need Your Help</p>
            </div>
            </div>

            <div className='chat'>
            <img src='https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/01/14/4053358685.jpeg' alt='' />
            <div className='viewChat'>
                <h1>beach_lover</h1>
                <p>Hello Admi, This Problem Product to Me</p>
            </div>
            </div>
            </div>
            <div className='roomChat'>
                <ul className='conversation'>
                {/* <li className='chatme'>
                <p> Hello Admin, I Need Your Help
                </p>
                </li><br /> */}
                <li className='chatother'>
                <img src='http://raw.cdn.baca.co.id/42c670c0-ac01-4d46-8fbc-d670d3bfda2b' alt='' />
                <p> Hello Admin, I Need Your Help  
                </p>
                </li><br />
                </ul>
                <div className='inputChat'>
                    <input type='text' placeholder='Send Message'></input>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
