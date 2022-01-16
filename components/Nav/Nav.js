import { HiShoppingBag } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Nav.module.css';

import { useCart } from '../../hooks/use-cart.js';

const Nav = () => {
  const { quantity } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        <Link href="/">MEG Shop</Link>
      </p>

      <p className={styles.navCart}>
        <Link href="/cart">
          <a>
            <HiShoppingBag /> {quantity}
          </a>
        </Link>
      </p>
    </nav>
  );
};

export default Nav;
