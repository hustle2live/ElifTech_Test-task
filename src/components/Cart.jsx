import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { dishRemoved, setQuantity, getTotalPrice, orderRegister } from '../redux/cartReducer';

import Plate from '../mockData/images/plate.png';
import styles from '../index.module.scss';

const ShoppingCart = () => {
   const state = useSelector((store) => store);
   const dispatch = useDispatch();

   const cartState = state.cart;
   const cartTotal = state.total;

   const handleCountChange = (itemName, itemCount) => {
      dispatch(setQuantity({ name: itemName, count: itemCount }));
   };

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [address, setAddress] = useState('');

   const formHandleSubmit = (data) => {
      const userOrder = {
         client: {
            Name: name,
            Email: email,
            Phone: phone,
            Address: address
         },
         order: [...cartState],
         amount: cartTotal.toFixed(2)
      };

      // console.log(userOrder);
      // console.log(JSON.stringify(userOrder));
      dispatch(orderRegister(userOrder));
   };

   useEffect(() => {
      dispatch(getTotalPrice());
   }, [cartState]);

   return (
      <>
         <h2 className={styles.cart_heading}>SHOPPING CART PAGE </h2>
         <div className={styles.cart_wrapper}>
            <div className={styles.cart_wrapper__userSection}>
               <form>
                  <label htmlFor='userName'>Name:</label>
                  <input id='userName' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                  <label htmlFor='userEmail'>Email:</label>
                  <input id='userEmail' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label htmlFor='userPhone'>Phone:</label>
                  <input id='userPhone' type='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                  <label htmlFor='userAddress'>Address:</label>
                  <input id='userAddress' type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
               </form>
            </div>
            <div className={styles.cart_wrapper__cartSection}>
               {cartState.map(({ NAME, PRICE, IMG_SRC, QUANTITY }) => {
                  const MenuImage = IMG_SRC ? require(`../mockData/${IMG_SRC}`) : Plate;
                  const itemPrice = Math.round(PRICE * QUANTITY * 100) / 100;

                  return (
                     <div className={styles.shopMenu__item} key={NAME}>
                        <img className={styles.shopMenu__item_image} src={MenuImage} alt={NAME} />
                        <div className={styles.shopMenu__item_frame}>
                           <h4 className={styles.shopMenu__item_name}>{NAME}</h4>
                           <div className={styles.shopMenu__item_price}>
                              <p>
                                 Price: <span>${PRICE}</span>
                                 <span className={styles.shopMenu__item_price_total}>
                                    Total: <span>${itemPrice}</span>
                                 </span>
                              </p>
                           </div>
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
            <div className={styles.cart_wrapper__totalSection}>
               <p className={styles.cart_wrapper__totalSection_totalAmount}>
                  <span>Total price : </span>
                  {cartTotal.toFixed(2)}
               </p>
               <input type='submit' value='Submit' onClick={formHandleSubmit} />
            </div>
         </div>
      </>
   );
};

export default ShoppingCart;
