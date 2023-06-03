import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import MenuPage from './components/Menu';
import ShoppingCart from './components/Cart';

import './App.css';

const App = () => {
   // let url = useLocation();

   return (
      <>
         <Header />
         <Routes>
            <Route path='/shop' element={<MenuPage />}></Route>
            <Route path='/cart' element={<ShoppingCart />}></Route>
         </Routes>
      </>
   );
};

export default App;
