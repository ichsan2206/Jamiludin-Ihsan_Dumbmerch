import React from 'react'
import NavbarUser from '../Navbar/NavbarUser';
import './ComplainStyle.css'

export default function ComplainUser() {
  return (
    <div>
        <NavbarUser />
        <div className='postComplain'>
        <div className='containerComplain'>
            <div className='listChat'>
            <div className='chat'>
            <img src='https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90' alt='' />
            <div className='viewChat'>
                <h1>Admin</h1>
                <p>Yes, Is there anything I can help</p>
            </div>
            </div>
            </div>
            <div className='roomChat'>
                <ul className='conversation'>
                <li className='chatme'>
                <p> Hello Admin, I Need Your Help
                </p>
                </li><br />
                <li className='chatother'>
                <img src='https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90' alt='' />
                <p> Yes, Is there anyting I can help ?  
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
  )
}
