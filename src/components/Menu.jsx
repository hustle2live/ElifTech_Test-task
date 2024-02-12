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
      <div className='flex'>
         <section className='flex flex-col w-1/3'>
            <h3 className='mx-auto mt-6 mb-4'>Shops:</h3>
            <ul>
               {shopNames.map((name) => {
                  const selected = name === activeShop ? 'active' : '';
                  return (
                     <li
                        className={`${selected} block box-border mx-auto my-4 text-center py-4 border border-gray-500 bg-white hover:bg-gray-100 active:bg-gray-300 cursor-pointer rounded-md w-auto max-w-80`}
                        key={name}
                        onClick={() => setActiveShop(name)}
                     >
                        {name}
                     </li>
                  );
               })}
            </ul>
         </section>
         <section className={`${styles.shopMenu} w-2/3`}>
            {shopMenu[activeShop].map(({ NAME, PRICE, IMG_SRC }) => {
               const MenuImage = IMG_SRC ? require(`../${IMG_SRC}`) : Plate;

               return (
                  <div className={styles.shopMenu__item} key={NAME}>
                     <img className={styles.shopMenu__item_image} src={MenuImage} alt={NAME} />

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
                  </div>
               );
            })}
         </section>
      </div>
   );
};

export default MenuPage;
