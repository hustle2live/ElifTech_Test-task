import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';

import styles from './index.scss';

import Header from './components/Header';
import MenuPage from './components/Menu';
import ShoppingCart from './components/Cart';

const App = () => {
   // let url = useLocation();

   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path='/shop' element={<MenuPage />}></Route>
            <Route path='/cart' element={<ShoppingCart />}></Route>
         </Routes>
      </BrowserRouter>
   );
};

export default App;
