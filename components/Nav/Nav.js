import { HiShoppingBag } from 'react-icons/hi';
import Image from 'next/image';

import styles from './Nav.module.css';

import { useCart } from '../../hooks/use-cart.js';

const Nav = () => {
  const { subtotal, checkout, totalItems } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>MEG Shop</p>
      <p className={styles.navCart}>
        <button onClick={checkout}>
          <HiShoppingBag /> {totalItems}
        </button>
      </p>
    </nav>
  );
};

export default Nav;
