import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from '../index.module.scss';
import data from '../mockData/data.json';
import Plate from '../mockData/images/plate.png';

import { dishAdded, dishRemoved } from '../redux/cartReducer';

const MenuPage = () => {
   const shopMenu = data;
   const shopNames = Object.keys(shopMenu);

   const [activeShop, setActiveShop] = useState(shopNames[0]);
   const dispatch = useDispatch();
   const cartState = useSelector((store) => store.cart);

   return (
      <div className={styles.wrapper}>
         <section className={styles.shopList}>
            <h1 className={styles.shopList__heading}>Shops:</h1>
            <ul>
               {shopNames.map((name) => {
                  const selected = name === activeShop ? 'active' : '';
                  return (
                     <li
                        className={`${styles.shopList__listElement} ${selected}`}
                        key={name}
                        onClick={() => setActiveShop(name)}
                     >
                        {name}
                     </li>
                  );
               })}
            </ul>
         </section>
         <section className={styles.shopMenu}>
            {shopMenu[activeShop].map(({ NAME, PRICE, IMG_SRC }) => {
               const MenuImage = IMG_SRC ? require(`../mockData/${IMG_SRC}`) : Plate;

               return (
                  <div className={styles.shopMenu__item} key={NAME}>
                     <img className={styles.shopMenu__item_image} src={MenuImage} alt={NAME} />
                     <div className={styles.shopMenu__item_frame}>
                        <h4 className={styles.shopMenu__item_name}>{NAME}</h4>
                        <p className={styles.shopMenu__item_price}>{PRICE}</p>
                        {!cartState.find((item) => item.NAME === NAME) ? (
                           <button
                              className={styles.shopMenu__item_button}
                              onClick={(e) => dispatch(dishAdded({ NAME, PRICE, IMG_SRC }))}
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
