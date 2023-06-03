import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dishAdded, dishRemoved, setQuantity, moreDish, lessDish } from '../redux/cartReducer';

import Plate from '../mockData/images/plate.png';
import styles from '../index.module.scss';

const ShoppingCart = () => {
   const cartState = useSelector((store) => store.cart);
   const dispatch = useDispatch();

   const [countValue, setCountValue] = useState(1);

   const handleCountChange = (itemName, itemCount) => {
      console.log(itemCount);
      // setCountValue();
      dispatch(setQuantity({ name: itemName, count: itemCount }));
   };

   return (
      <>
         <h2 className={styles.cart_heading}>SHOPPING CART PAGE </h2>;
         <div className={styles.cart_wrapper}>
            <div className={styles.cart_wrapper__userSection}>
               <form action='#'>
                  <label htmlFor='userName'>Name:</label>
                  <input id='userName' type='text' />
                  <label htmlFor='userEmail'>Email:</label>
                  <input id='userEmail' type='email' />
                  <label htmlFor='userPhone'>Phone:</label>
                  <input id='userPhone' type='phone' />
                  <label htmlFor='userAddress'>Address:</label>
                  <input id='userAddress' type='text' />
               </form>
            </div>
            <div className={styles.cart_wrapper__cartSection}>
               {cartState.map(({ NAME, PRICE, IMG_SRC, QUANTITY }) => {
                  const MenuImage = IMG_SRC ? require(`../mockData/${IMG_SRC}`) : Plate;

                  return (
                     <div className={styles.shopMenu__item} key={NAME}>
                        <img className={styles.shopMenu__item_image} src={MenuImage} alt={NAME} />
                        <div className={styles.shopMenu__item_frame}>
                           <h4 className={styles.shopMenu__item_name}>{NAME}</h4>
                           <p className={styles.shopMenu__item_price}>
                              Price: <span>${PRICE * QUANTITY}</span>
                           </p>
                           <input
                              type='number'
                              min={0}
                              max={10}
                              value={QUANTITY}
                              className={styles.cart_wrapper__cartSection_inputCount}
                              onChange={(e) => handleCountChange(NAME, e.target.value)}
                           />
                           <button
                              className={styles.cart_wrapper__cartSection_deleteButton}
                              onClick={(e) => dispatch(dishRemoved(NAME))}
                           >
                              <span className='material-symbols-outlined'>close</span>
                           </button>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
         ;
      </>
   );
};

export default ShoppingCart;
