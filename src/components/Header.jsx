import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../index.scss';

const Header = () => {
   // let url = useLocation();

   return (
      <div className={styles.headerMenu}>
         <nav>
            <ul>
               <li>
                  <NavLink className={styles.navLink} to='/shop'>
                     Shop
                  </NavLink>
               </li>
               <span>|</span>
               <li>
                  <NavLink className={styles.navLink} to='/cart'>
                     Shopping Cart
                  </NavLink>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;
