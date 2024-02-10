import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dishRemoved, setQuantity, getTotalPrice, orderRegister } from '../redux/cartReducer';

import Plate from '../images/plate.png';
import styles from '../index.module.scss';

const ShoppingCart = () => {
   const state = useSelector((store) => store);
   const dispatch = useDispatch();

   const cartState = state.cart;
   const cartTotal = state.total;

   const handleCountChange = (itemName, itemCount) => {
      dispatch(setQuantity({ name: itemName, count: itemCount }));
   };

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [address, setAddress] = useState('');

   const formHandleSubmit = (data) => {
      const userOrder = {
         client: {
            Firstname: firstName,
            Lastname: lastName,
            Email: email,
            Phone: phone,
            Address: address
         },
         order: [...cartState],
         amount: cartTotal.toFixed(2)
      };

      dispatch(orderRegister(userOrder));
   };

   useEffect(() => {
      dispatch(getTotalPrice());
   }, [cartState, dispatch]);

   return (
      <div className='p-0'>
         {/* <h2 className={styles.cart_heading}>SHOPPING CART PAGE </h2> */}

         <div
            className={`${styles.cart_wrapper} bg-gray-50 border-gray-900/10 m-0 sm:m-8 md:m-14 lg:mx-32 pt-12 pb-12 border-2 rounded-md`}
         >
            <div className={styles.cart_wrapper__userSection}>
               <h2 className='ml-12 text-lg font-semibold leading-7 text-gray-900'>Contact information</h2>
               {/* <p className='ml-12 mt-1 text-sm leading-6 text-gray-600'>
                  This information will be displayed publicly so be careful what you share.
               </p> */}

               <form className='ml-12 mt-0 mb-12 p-0'>
                  <div className='mt-4'>
                     <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor='userEmail'>
                        Email address:
                     </label>

                     <div className='mt-2'>
                        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full bg-white '>
                           <input
                              id='userEmail'
                              type='email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className='block flex-1 rounded-md border border-slate-300 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-0'
                           />
                        </div>
                     </div>
                  </div>

                  {/* <div className='divide-y divide-gray-400'></div> */}

                  <div className='mt-12 pt-12 flex gap-4 w-full border-t-2 flex-wrap lg:flex-nowrap'>
                     <div className='w-full lg:w-1/2'>
                        <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor='userName'>
                           First name:
                        </label>

                        <div className='mt-2'>
                           <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white'>
                              <input
                                 id='userFirstName'
                                 type='text'
                                 required
                                 value={firstName}
                                 onChange={(e) => setFirstName(e.target.value)}
                                 className='block flex-1 rounded-md border border-slate-300 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-0'
                              />
                           </div>
                        </div>
                     </div>
                     <div className='w-full lg:w-1/2'>
                        <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor='userName'>
                           Last name:
                        </label>

                        <div className='mt-2'>
                           <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white'>
                              <input
                                 id='userLastName'
                                 type='text'
                                 value={lastName}
                                 onChange={(e) => setLastName(e.target.value)}
                                 className='block flex-1 rounded-md border border-slate-300 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-0'
                              />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className='mt-12'>
                     <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor='userPhone'>
                        Phone:
                     </label>

                     <div className='mt-2'>
                        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full bg-white'>
                           <input
                              id='userPhone'
                              type='phone'
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className='block flex-1 rounded-md border border-slate-300 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-0'
                           />
                        </div>
                     </div>
                  </div>

                  <div className='mt-12'>
                     <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor='userAddress'>
                        Address:
                     </label>

                     <div className='mt-2'>
                        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full bg-white '>
                           <input
                              id='userAddress'
                              type='text'
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              className='block flex-1 rounded-md border border-slate-300 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-0'
                           />
                        </div>
                     </div>
                  </div>
               </form>
            </div>
            <div className={styles.cart_wrapper__cartSection}>
               {cartState.map(({ NAME, PRICE, IMG_SRC, QUANTITY }) => {
                  const MenuImage = IMG_SRC ? require(`../${IMG_SRC}`) : Plate;

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
      </div>
   );
};

export default ShoppingCart;
