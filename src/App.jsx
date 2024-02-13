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
               path='/eliftech-test/'
               element={
                  <div className='m-8 text-lg'>
                     <p>
                        Welcome to the restaurant menu, styled with{' '}
                        <a
                           href='https://tailwindcss.com/docs/'
                           target='_blank'
                           rel='noreferrer'
                           className='font-semibold 
                           text-sky-700
                           hover:text-orange-500
                           active:text-orange-700'
                        >
                           Tailwind CSS Library
                        </a>
                     </p>
                     <p>let's have some meal</p>
                     <Link
                        to='/eliftech-test/shop'
                        className='block w-max mx-4 my-8 bg-orange-100 hover:shadow-md active:bg-orange-200 p-4 border-2 rounded-xl'
                     >
                        Let's Go!
                        <ArrowRightIcon className='inline pl-2 -mt-1 w-12 h-6' />
                     </Link>
                  </div>
               }
            ></Route>
            <Route path='/eliftech-test/shop' element={<MenuPage />}></Route>
            <Route path='/eliftech-test/cart' element={<ShoppingCart />}></Route>
            <Route path='/eliftech-test/profile' element={<div className='m-8'>Profile Page</div>}></Route>
         </Routes>
      </>
   );
};

export default App;
