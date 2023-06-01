import React from 'react';
import styles from '../index.scss';

const MenuPage = () => {
   // const activeShop = useContext((state) => state.activeShop);

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
