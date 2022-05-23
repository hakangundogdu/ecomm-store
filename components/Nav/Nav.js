import { HiShoppingBag } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Nav.module.css';

import { useCart } from '../../hooks/use-cart.js';

const Nav = () => {
  const { totalQuantity } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        <Link href="/">MEG Shop</Link>
      </p>

      <p className={styles.navCart}>
        <Link href="/cart2">
          <a>
            <HiShoppingBag /> {totalQuantity}
          </a>
        </Link>
      </p>
    </nav>
  );
};

export default Nav;
