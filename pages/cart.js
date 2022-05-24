import styles from '../styles/Home.module.css';
import { HiShoppingBag } from 'react-icons/hi';
import { useCart } from '../hooks/use-cart';
import CartItem from '../components/Cart/CartItem';
import Link from 'next/link';

const Cart = () => {
  const {
    cartItems,
    subtotal,
    totalQuantity,
    addToCart,
    removeItem,
    checkout,
  } = useCart();

  const cartItemAddHandler = (id) => {
    addToCart({ id });
  };

  const cartItemRemoveHandler = (id) => {
    removeItem({ id });
  };

  const cartList = (
    <div className={styles.cartList}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          quantity={item.quantity}
          price={item.pricePerItem}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item.id)}
        />
      ))}
    </div>
  );

  return (
    <div className={styles.cartcontainer}>
      {cartList}
      <div className={styles.cart}>
        <h3>
          Total Amount: <span className={styles.subtotal}>${subtotal}</span>
        </h3>
        <div>
          <button
            className={`${styles.button} ${styles.cartButton}`}
            onClick={checkout}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
