import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/Placeorder/Placeorder';
import Footer from './Component/Footer/Footer';
import Login from './Component/Login/Login';

function App() {

  const [login, setLogin]  = useState(false);
  return (
    <>
    {login?<Login setLogin={setLogin} />: <></>}
    <div className='App'>
      <Navbar setLogin= {setLogin} />
      <Routes>
        <Route path="/home" element={<Home /> }/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Placeorder />} />
      </Routes> 
    </div>  
    <Footer />
    </>
  );
}

export default App;
