import styles from '../styles/Home.module.css';
import { HiShoppingBag } from 'react-icons/hi';
import { useCart } from '../hooks/use-cart';
import CartItem from '../components/Cart/CartItem';

const Cart2 = () => {
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
    <ul>
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
    </ul>
  );

  return (
    <div>
      {cartList}
      <ul className={styles.cart}>
        <li>
          <strong>Items:</strong> {totalQuantity}
        </li>
        <li>
          <strong>Total:</strong> ${subtotal}
        </li>
        <li>
          <button
            className={`${styles.button} ${styles.cartButton}`}
            onClick={checkout}
          >
            <HiShoppingBag />
            Check Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Cart2;
