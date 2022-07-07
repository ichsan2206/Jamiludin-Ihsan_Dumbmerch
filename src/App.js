import React from 'react';
// import UserPage from './component/User/UserPage';
import {Routes, Route} from 'react-router-dom';
import Login from './component/Auth/Login'
import Register from './component/Auth/Register';
import DetailProduct from './component/User/DetailProduct';
import Userpage from './component/User/ProductList';
import Profil from './component/User/Profil';
import CategoryProduct from './component/Admin/CategoryProduct';
import ProductAdmin from './component/Admin/ProductAdmin';
import EditProduct from './component/Admin/EditProduct';
import EditCategory from './component/Admin/EditCategory';
import ComplainUser from './component/User/ComplainUser';
import ComplainAdmin from './component/Admin/ComplainAdmin';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='Register' element={<Register />}/>  
      <Route path='/UserPage' element={<Userpage />}/>
      <Route path='/Profil' element={<Profil />}/>
      <Route path='/Detail-Product' element={<DetailProduct />}/>
      <Route path='/Complain-User' element={<ComplainUser />}/>
       {/* <Route path='/Detail-Product' element={<DetailProduct />}/> */}
      {/* Halaman Admin */}
      <Route path='/Complain-Admin' element={<ComplainAdmin />}/>
      <Route path='/Category' element={<CategoryProduct />}/>
      <Route path='/Product' element={<ProductAdmin />}/>
      <Route path='/Edit-Product' element={<EditProduct />}/>
      <Route path='/Edit-Category' element={<EditCategory />}/>


     
      </Routes>
    </div>
  );
}

export default App;
