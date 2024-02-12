import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import Header from './components/Header';
import MenuPage from './components/Menu';
import ShoppingCart from './components/Cart';

import './App.css';

const App = () => {
   return (
      <>
         <Header />
         <Routes>
            <Route
               path='/'
               element={
                  <div className='m-8 text-lg'>
                     Welcome to the restaurant, let's have some meal
                     <Link
                        to='/shop'
                        className='mx-4 bg-orange-100 hover:shadow-md active:bg-orange-200 p-4 border-2 rounded-xl'
                     >
                        Let's Go!
                        <ArrowRightIcon className='inline pl-2 -mt-1 w-12 h-6' />
                     </Link>
                  </div>
               }
            ></Route>
            <Route path='/shop' element={<MenuPage />}></Route>
            <Route path='/cart' element={<ShoppingCart />}></Route>
            <Route path='/profile' element={<div className='m-8'>Profile Page</div>}></Route>
         </Routes>
      </>
   );
};

export default App;
