import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dishRemoved, setQuantity, getTotalPrice, orderRegister } from '../redux/cartReducer';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

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
      <div className={styles.cart_wrapper}>
         <div className='flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap relative bg-gray-50 border-gray-900/10 m-0 sm:m-8 md:m-14 lg:mx-32 lg:gap-12 p-12 pl-0 border-2 rounded-md'>
            <div className='w-full mt-12 lg:mt-0 lg:w-1/2 block'>
               <h2 className='ml-12 text-lg font-semibold leading-7 text-gray-900'>Contact information</h2>
               <form className='m-12 mr-6 mt-0 p-0'>
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

                  <div className='mt-12 pt-12 flex gap-4 w-full border-t-2 flex-wrap lg:flex-nowrap'>
                     <div className='w-full lg:w-1/2'>
                        <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor='userFirstName'>
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
                        <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor='userLastName'>
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
            <div className='w-full pl-12 lg:pl-0 lg:w-1/2 2xl:max-w-lg block'>
               <h2 className='mb-6 text-lg font-semibold leading-7 text-gray-900'>Order summary:</h2>

               <ul className='bg-white p-8 pr-14 min-h-24 max-h-96 overflow-y-scroll divide-y divide-gray-200 min-w-full'>
                  {cartState.map(({ NAME, PRICE, IMG_SRC, QUANTITY }) => {
                     const MenuImage = IMG_SRC ? require(`../${IMG_SRC}`) : Plate;

                     const itemPrice = (Math.round(PRICE * QUANTITY * 100) / 100).toFixed(2);

                     return (
                        <li className='flex py-6' key={NAME}>
                           <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                              <img src={MenuImage} alt={NAME} className='h-full w-full object-cover object-center' />
                           </div>

                           <div className='ml-4 flex flex-1 flex-col'>
                              <div>
                                 <div className='flex justify-between text-base font-medium text-gray-900'>
                                    <h3>{NAME}</h3>
                                    <p className='ml-4'>${itemPrice}</p>
                                 </div>
                                 <p className='mt-1 text-sm text-gray-500'>
                                    {' '}
                                    Price: <span>${PRICE}</span>
                                 </p>
                              </div>
                              <div className='flex flex-1 items-end justify-between text-sm'>
                                 <p className='text-gray-500'>Quantity: </p>

                                 <div className='flex border-2 rounded-md gap-0 -ml-2 mr-2'>
                                    <input
                                       value={QUANTITY}
                                       type='number'
                                       min={0}
                                       max={10}
                                       className='border-gray-300 border-0 rounded-md pl-4 w-12 ml-auto mr-0'
                                       onChange={(e) => handleCountChange(NAME, e.target.value)}
                                    />

                                    <button className='m-0' onClick={(e) => handleCountChange(NAME, QUANTITY - 1)}>
                                       <ChevronLeftIcon className='w-6 h-6 m-0 bg-gray-50 hover:bg-gray-100 hover:text-orange-600 active:bg-gray-200 border text-slate-400' />
                                    </button>
                                    <button className='m-0' onClick={(e) => handleCountChange(NAME, QUANTITY + 1)}>
                                       <ChevronRightIcon className='w-6 h-6 m-0 bg-gray-50 hover:bg-gray-100 hover:text-orange-600 active:bg-gray-200 border text-slate-400' />
                                    </button>
                                 </div>

                                 <div className='flex'>
                                    <button
                                       type='button'
                                       onClick={(e) => dispatch(dishRemoved(NAME))}
                                       className='font-medium text-indigo-600 hover:text-indigo-500'
                                    >
                                       Remove
                                    </button>
                                    {/* <XMarkIcon className='h-5 w-5 text-gray-900' aria-hidden='true' /> */}
                                 </div>
                              </div>
                           </div>
                        </li>
                     );
                  })}
               </ul>

               <div className='block box-block w-full relative isolate flex justify-evenly center p-8 pb-0 bg-white'>
                  <p className='text-xl leading-6 text-gray-900'>
                     <strong className='font-bold mr-2'>Total price :</strong>
                     <svg viewBox='0 0 2 2' className='mx-2 inline h-0.5 w-0.5 fill-current' aria-hidden='true'>
                        <circle cx={1} cy={1} r={1} />
                     </svg>
                     <span className='font-semibold'> $ {cartTotal.toFixed(2)}</span>
                  </p>
               </div>

               <div className='block w-full bg-white p-8'>
                  <input
                     className='block mx-auto w-48 lg:w-64 rounded bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 active:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
                     type='submit'
                     value='Confirm Order'
                     onClick={formHandleSubmit}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShoppingCart;
