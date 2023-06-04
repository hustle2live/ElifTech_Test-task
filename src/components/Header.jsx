import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../index.module.scss';

const Header = () => {
   return (
      <div className={styles.header}>
         <nav>
            <ul className={styles.header__navmenu}>
               <li>
                  <NavLink className={styles.header__navLink} to='/shop'>
                     Shop
                  </NavLink>
               </li>
               <span>|</span>
               <li>
                  <NavLink className={styles.header__navLink} to='/cart'>
                     Shopping Cart
                  </NavLink>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;
