import React from 'react'
import '../User/UserStyle.css'
import LogoDw from '../img/Frame.png'
import ProductList from './ProductList'
import Profil from './Profil'

export default function UserPage() {
  return (
    <div>
        <nav className='container'>
            <div className='left'>
                <img className="img" src={LogoDw} alt='' />
            </div>
            <div className='right'>
                <ul>
                    <li>
                        <button>Complain</button>
                    </li>
                    <li>
                        <button>Profil</button>
                    </li>
                    <li>
                         <button>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
        <div className='content'>
            <ProductList />
            {/* <Profil /> */}
        </div>

    </div>
  );
}