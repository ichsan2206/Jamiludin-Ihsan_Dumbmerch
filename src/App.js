import React from 'react';
// import StartPage from './component/StartPage';
import UserPage from './User/UserPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
      {/* <Route path='/' element={<StartPage />}/> */}
      <Route path='/UserPage' element={<UserPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
