import React from 'react';
import styles from '../index.module.scss';

import data from '../mockData/data.json';

const MenuPage = () => {
   // const activeShop = useContext((state) => state.activeShop);
   console.log(data);
   return (
      <>
         <section className={styles.shopsList}>
            <h1>Shops:</h1>
            <ul>
               <li>McDonalds</li>
               <li>KFC</li>
               <li>Hesburger</li>
               <li>PrimaCafe</li>
               <li>Noname</li>
            </ul>
         </section>
         <section className={styles.currentShopContent}></section>
      </>
   );
};

export default MenuPage;
