import React from 'react';
// import UserPage from './component/User/UserPage';
import {Routes, Route} from 'react-router-dom';
import Login from './component/Auth/Login'
import Register from './component/Auth/Register';
// import DetailProduct from './component/User/DetailProduct';
import Userpage from './component/User/ProductList'
import Profil from './component/User/Profil'

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='Register' element={<Register />}/>  
      <Route path='/UserPage' element={<Userpage />}/>
      <Route path='/Profil' element={<Profil />}/>
      {/* <Route path='/Detail-Product' element={<DetailProduct />}/> */}
      </Routes>
    </div>
  );
}

export default App;
