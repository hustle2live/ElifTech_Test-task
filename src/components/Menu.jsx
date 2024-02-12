import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from '../index.module.scss';
import shopMenu from '../mockData/data.json';
import Plate from '../images/plate.png';

import { dishAdded, dishRemoved } from '../redux/cartReducer';

// import { Alert, initTE } from '@tailwind/elements'; npm install tw-elements

import { TrashIcon } from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';

const MenuPage = () => {
   const shopNames = Object.keys(shopMenu);

   const [confirm, setConfirm] = useState(false);
   const [item, setItem] = useState(null);

   const WarningAlert = ({ deletedItem }) => {
      return (
         <div className='fixed bg-gray-500 bg-opacity-80 p-24 block min-w-full min-h-full z-20 overflow-hidden'>
            <div className='flex -translate-x-1/2 -translate-y-1/2 gap-4 align-center justify-center absolute top-1/2 left-1/2 shadow-lg min-w-vw mb-4 rounded-lg bg-orange-100 px-6 py-5 text-base'>
               <p className='block text-red-800 my-auto mr-6'>Are You Sure to remove this Item?</p>

               <button
                  className='rounded-lg bg-orange-300 my-auto px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-orange-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  onClick={() => {
                     dispatch(dishRemoved(deletedItem));
                     setConfirm(false);
                  }}
               >
                  Delete
               </button>

               <button
                  className='rounded-lg bg-transparent my-auto px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-400 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  onClick={() => {
                     setConfirm(false);
                  }}
               >
                  Cancel
               </button>
            </div>
         </div>
      );
   };

   const [activeShop, setActiveShop] = useState(shopNames[0]);
   const dispatch = useDispatch();
   const cartState = useSelector((store) => store.cart);

   return (
      <>
         {confirm && <WarningAlert deletedItem={item} />}
         <div className='flex mt-10'>
            <section className='h-full w-1/4'>
               <h3 className='mx-auto mt-6 mb-4 w-1/2 pl-4 font-semibold'>Select shop:</h3>

               <nav className='relative flex flex-col m-8 mx-auto xl:w-2/3 bg-white shadow'>
                  <ul className='relative m-0 list-none px-[0.2rem]'>
                     {shopNames.map((name) => {
                        const selected = name === activeShop ? 'text-orange-500 font-semibold bg-slate-100' : '';
                        return (
                           <li className={`${selected} relative`} key={name} onClick={() => setActiveShop(name)}>
                              <div className='flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 outline-none transition duration-300 hover:bg-slate-50 hover:font-semibold hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-100 active:text-inherit active:outline-none'>
                                 <span className='mr-4 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-gray-400'>
                                    <svg
                                       xmlns='http://www.w3.org/2000/svg'
                                       viewBox='0 0 24 24'
                                       fill='currentColor'
                                       className='h-4 w-4'
                                    >
                                       <path
                                          fillRule='evenodd'
                                          d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z'
                                          clipRule='evenodd'
                                       />
                                    </svg>
                                 </span>
                                 <span>{name}</span>
                              </div>
                           </li>
                        );
                     })}
                  </ul>
               </nav>
            </section>
            <section className={`${styles.shopMenu} w-3/4 h-svh`}>
               <ul className={`${styles.shopMenu} flex flex-wrap overflow-y-scroll -my-6 p-6 xl:p-12 xl:pb-24`}>
                  {shopMenu[activeShop].map(({ NAME, PRICE, IMG_SRC }) => {
                     const MenuImage = IMG_SRC ? require(`../${IMG_SRC}`) : Plate;

                     return (
                        <li
                           className='relative flex flex-col w-72 bg-white border border-slate-200 overflow-hidden hover:border-slate-400 hover:scale-105 hover:z-10 hover:shadow-xl'
                           key={NAME}
                        >
                           <img
                              className='block box-border -mt-4 -ml-4 rounded-full w-32 h-32 shadow-md'
                              src={MenuImage}
                              alt={NAME}
                           />

                           <div className={styles.shopMenu__item_frame}>
                              <h4 className={styles.shopMenu__item_name}>{NAME}</h4>

                              <p className={styles.shopMenu__item_price}>{PRICE}</p>

                              {!cartState.find((item) => item.NAME === NAME) ? (
                                 <button
                                    className='relative m-auto mr-0 mb-2 z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium hover:bg-gray-100 border hover:shadow-md'
                                    onClick={(e) =>
                                       dispatch(dishAdded({ NAME, PRICE, IMG_SRC: IMG_SRC ? `${IMG_SRC}` : null }))
                                    }
                                 >
                                    Add to Cart
                                 </button>
                              ) : (
                                 <button
                                    className='m-auto mr-0 mb-2 z-10 rounded-full bg-transparent px-3 py-1.5 hover:text-pink-600'
                                    onClick={() => {
                                       setItem(NAME);
                                       setConfirm(true);
                                    }}
                                 >
                                    Remove
                                    <TrashIcon className='inline h-4 w-4 ml-1 -mt-1' aria-hidden='true' />
                                    <span className='absolute right-4 top-4 text-emerald-500 font-semibold'>
                                       <CheckBadgeIcon />
                                       <span className='text-sm'> In Cart</span>
                                    </span>
                                 </button>
                              )}
                           </div>
                        </li>
                     );
                  })}
               </ul>
            </section>
         </div>
      </>
   );
};

export default MenuPage;
