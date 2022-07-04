import React from 'react'
import './Profil.css'
import FotoP from '../img/profil.jpg'
import LogoDw from '../img/Frame.png'
import Navbar from '../Navbar/NavbarUser'

function Profil () {
  return (
    <div>
    <Navbar />
    <div className='post'>
        <div className='container-profil'>
            <div className='profil'>
               <h1>My Profil</h1> 
               <img className='profilP' src={FotoP} alt='' />
            </div>
            <div className='detail'>
            <div className='container-detail'>
            <div>
            <h1>Name</h1>
            <p>Yosep</p>
            </div>
            <div>
            <h1>Email</h1>
            <p>yosepgans@gmail.com</p>
            </div>
            <div>
            <h1>Phone</h1>
            <p>083896833122</p>
            </div>
            <div>
            <h1>Gender</h1>
            <p>Male</p>
            </div>
            <div>
            <h1>Address</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            </div>
            </div>
            </div>
            <div className='transaksi'>
            <h1> My Transaction</h1>
            <div className='containerT'>
                <div className='contentT' >
                  <img src='https://cdn1-production-images-kly.akamaized.net/Mo0L0RWwWpE-OBxPKjCYOj3Z3jI=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1006506/original/051189500_1443687569-gambar_mouse_-_microsoft.jpg' alt='' />
                  </div>
                  <div className='detailT'>
                  <h1>Mouse</h1>
                  <h2>Saturday, 14 Juli 2021</h2>
                  <h3>Price : Rp.500.000</h3>
                  <p>Sub Total : 500.000</p>
                  </div>
                
                <div className='logoT'>
                  <img src={LogoDw} alt='' />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profil;