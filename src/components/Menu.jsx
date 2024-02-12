import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from '../index.module.scss';
import shopMenu from '../mockData/data.json';
import Plate from '../images/plate.png';

import { dishAdded, dishRemoved } from '../redux/cartReducer';

const MenuPage = () => {
   const shopNames = Object.keys(shopMenu);

   const [activeShop, setActiveShop] = useState(shopNames[0]);
   const dispatch = useDispatch();
   const cartState = useSelector((store) => store.cart);

   return (
      <div className='flex mt-10'>
         <section className='h-full w-1/3'>
            <h3 className='mx-auto mt-6 mb-4 w-1/2 pl-4 font-semibold'>Select shop:</h3>

            <nav className='relative flex flex-col m-8 mx-auto w-1/2 bg-white shadow'>
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
                                       fill-rule='evenodd'
                                       d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z'
                                       clip-rule='evenodd'
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
         <section className={`${styles.shopMenu} w-2/3 h-svh`}>
            <ul className={`${styles.shopMenu} flex flex-wrap overflow-y-scroll`}>
               {shopMenu[activeShop].map(({ NAME, PRICE, IMG_SRC }) => {
                  const MenuImage = IMG_SRC ? require(`../${IMG_SRC}`) : Plate;

                  return (
                     <li className='relative flex flex-col w-72 border border-slate-300 overflow-hidden' key={NAME}>
                        <img className={`${styles.shopMenu__item_image} -mt-4 -ml-4`} src={MenuImage} alt={NAME} />

                        <div className={styles.shopMenu__item_frame}>
                           <h4 className={styles.shopMenu__item_name}>{NAME}</h4>

                           <p className={styles.shopMenu__item_price}>{PRICE}</p>

                           {!cartState.find((item) => item.NAME === NAME) ? (
                              <button
                                 className={styles.shopMenu__item_button}
                                 onClick={(e) =>
                                    dispatch(dishAdded({ NAME, PRICE, IMG_SRC: IMG_SRC ? `${IMG_SRC}` : null }))
                                 }
                              >
                                 Add to Cart
                              </button>
                           ) : (
                              <button
                                 className={`${styles.shopMenu__item_button} ${styles.delete}`}
                                 onClick={(e) => dispatch(dishRemoved(NAME))}
                              >
                                 Delete
                                 <span className='material-symbols-outlined'>done</span>
                              </button>
                           )}
                        </div>
                     </li>
                  );
               })}
            </ul>
         </section>
      </div>
   );
};

export default MenuPage;
