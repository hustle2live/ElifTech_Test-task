import React, { useState } from 'react';
import styles from '../index.module.scss';

import data from '../mockData/data.json';

import Plate from '../mockData/images/plate.png';

const MenuPage = () => {
   // const activeShop = useContext((state) => state.activeShop);
   // console.log(data);

   const menues = data;
   const menuNames = Object.keys(menues);

   // console.log(menues);
   console.log(menuNames);

   const [activeShop, setActiveShop] = useState(Object.keys(menues)[0]);

   // console.log('activeShop :');
   // console.log(activeShop);

   return (
      <div className={styles.wrapper}>
         <section className={styles.shopList}>
            <h1 className={styles.shopList__heading}>Shops:</h1>
            <ul>
               {menuNames.map((name) => {
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
            {menues[activeShop].map(({ NAME, PRICE, IMG_SRC }) => {
               const MenuImage = IMG_SRC ? require(`../mockData/${IMG_SRC}`) : Plate;

               return (
                  <div className={styles.shopMenu__item} key={NAME}>
                     <img
                        className={styles.shopMenu__item_image}
                        src={MenuImage}
                        alt={NAME}
                     />
                     <div className={styles.shopMenu__item_frame}>
                        <h4 className={styles.shopMenu__item_name}>{NAME}</h4>
                        <p className={styles.shopMenu__item_price}>{PRICE}</p>
                        <button className={styles.shopMenu__item_button}>Add to Cart</button>
                     </div>
                  </div>
               );
            })}
         </section>
      </div>
   );
};

export default MenuPage;
