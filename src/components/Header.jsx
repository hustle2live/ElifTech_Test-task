import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../index.module.scss';

const Header = () => {
   return (
      <div className={styles.header}>
         <nav className='ml-8'>
            <ul className={styles.header__navmenu}>
               <li>
                  <NavLink
                     className={`${styles.header__navLink} text-sky-500 hover:text-sky-600 border-4 m-1 p-4`}
                     to='/shop'
                  >
                     Shop
                  </NavLink>
               </li>
               <span className='m-0'> </span>
               <li>
                  <NavLink className={'text-sky-500 hover:text-sky-600 border-4 m-1 p-4'} to='/cart'>
                     Shopping Cart
                  </NavLink>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;
