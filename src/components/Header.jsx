import React from 'react';
import { NavLink } from 'react-router-dom';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

import LogoImage from '../images/logo-rest-1.png';

import styles from '../index.module.scss';

const Header = () => {
   const navigation = [
      { id: '001', name: 'Main', href: '/', current: false },
      { id: '002', name: 'Shop Menu', href: '/shop', current: false },
      { id: '003', name: 'Shopping Cart', href: '/cart', current: false },
      { id: '004', name: 'Profile', href: '/profile', current: false }
   ];

   const classNames = (...classes) => {
      return classes.filter(Boolean).join(' ');
   };

   return (
      <Disclosure as='nav' className='bg-gray-100'>
         {({ open }) => (
            <>
               <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                  <div className='relative flex h-16 items-center justify-between'>
                     <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* Mobile menu button*/}
                        <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                           <span className='absolute -inset-0.5' />
                           <span className='sr-only'>Open main menu</span>
                           {open ? (
                              <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                           ) : (
                              <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                           )}
                        </Disclosure.Button>
                     </div>
                     <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex flex-shrink-0 items-center'>
                           {/* <img className='h-8 w-auto' src='./../images/logo-rest-1.png' alt='Restaurant' /> */}
                           {/* <LogoImage /> */}
                        </div>
                        <div className='hidden sm:ml-6 sm:block'>
                           <div className='flex space-x-4'>
                              {navigation.map((item) => (
                                 <li key={item.name}>
                                    <NavLink
                                       to={item.href}
                                       className={classNames(
                                          item.current
                                             ? 'bg-gray-900 text-white'
                                             : 'text-gray-500 hover:bg-gray-300 hover:text-black',
                                          'rounded-md px-3 py-2 text-sm font-medium'
                                       )}
                                       aria-current={item.current ? 'page' : undefined}
                                    >
                                       {item.name}
                                    </NavLink>
                                 </li>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        {/* notify button */}
                        <button
                           type='button'
                           className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                        >
                           <span className='absolute -inset-1.5' />
                           <span className='sr-only'>View notifications</span>
                           <BellIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                        {/* Profile dropdown */}
                        <Menu as='div' className='relative ml-3'>
                           <div>
                              <Menu.Button className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                                 <span className='absolute -inset-1.5' />
                                 <span className='sr-only'>Open user menu</span>
                                 <img
                                    className='h-8 w-8 rounded-full'
                                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                    alt=''
                                 />
                              </Menu.Button>
                           </div>
                           <Transition
                              as={Fragment}
                              enter='transition ease-out duration-100'
                              enterFrom='transform opacity-0 scale-95'
                              enterTo='transform opacity-100 scale-100'
                              leave='transition ease-in duration-75'
                              leaveFrom='transform opacity-100 scale-100'
                              leaveTo='transform opacity-0 scale-95'
                           >
                              <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href='#'
                                          className={classNames(
                                             active ? 'bg-gray-100' : '',
                                             'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                       >
                                          Your Profile
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href='#'
                                          className={classNames(
                                             active ? 'bg-gray-100' : '',
                                             'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                       >
                                          Settings
                                       </a>
                                    )}
                                 </Menu.Item>
                                 <Menu.Item>
                                    {({ active }) => (
                                       <a
                                          href='#'
                                          className={classNames(
                                             active ? 'bg-gray-100' : '',
                                             'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                       >
                                          Sign out
                                       </a>
                                    )}
                                 </Menu.Item>
                              </Menu.Items>
                           </Transition>
                        </Menu>
                     </div>
                  </div>
               </div>

               <Disclosure.Panel className='sm:hidden'>
                  <div className='space-y-1 px-2 pb-3 pt-2'>
                     {navigation.map((item) => (
                        <Disclosure.Button
                           key={item.id}
                           as='a'
                           href={item.href}
                           className={classNames(
                              item.current
                                 ? 'bg-gray-900 text-white'
                                 : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'block rounded-md px-3 py-2 text-base font-medium'
                           )}
                           aria-current={item.current ? 'page' : undefined}
                        >
                           {item.name}
                        </Disclosure.Button>
                     ))}
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   );

   // return (
   //    <div className={styles.header}>
   //       <nav className='relative left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4'>
   //          <ul className='mt-1 flex h-11 w-21 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
   //             <li className=''>
   //                <NavLink className='text-sky-500 hover:text-sky-600 border-2 m-1 p-4' to='/shop'>
   //                   Shop
   //                </NavLink>
   //             </li>
   //             <span className='m-0'> </span>

   //             <li>
   //                <NavLink className='text-sky-500 hover:text-sky-600 border-2 m-1 p-4' to='/cart'>
   //                   Shopping Cart
   //                </NavLink>
   //             </li>
   //             <span className='m-0'> </span>

   //             <li>
   //                <NavLink className='text-sky-500 hover:text-sky-600 border-2 m-1 p-4' to='#'>
   //                   2121312 Cart
   //                </NavLink>
   //             </li>
   //             <span className='m-0'> </span>

   //             <li>
   //                <NavLink className='text-sky-500 hover:text-sky-600 border-2 m-1 p-4' to='#'>
   //                   Exit
   //                </NavLink>
   //             </li>
   //          </ul>
   //       </nav>
   //    </div>
   // );
};

export default Header;
