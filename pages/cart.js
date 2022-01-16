import Head from 'next/head';
import { HiShoppingBag } from 'react-icons/fa';
import styles from '../styles/Cart.module.css';

import { useCart } from '../hooks/use-cart.js';

import products from '../products.json';

import Table from '../components/Table/Table';

const columns = [
  {
    columnId: 'title',
    Header: 'Product Name',
  },
  {
    columnId: 'quantity',
    Header: 'Quantity',
  },
  {
    columnId: 'pricePerItem',
    Header: 'Price Per Item',
  },
  {
    columnId: 'total',
    Header: 'Item Total',
  },
];

export default function Cart() {
  const { cartItems, checkout, updateItem } = useCart();

  const data = cartItems.map(({ id, quantity, pricePerItem }) => {
    const product = products.find(({ id: pid }) => pid === id);
    const { title } = product || {};

    const Quantity = () => {
      function handleOnSubmit(e) {
        e.preventDefault();

        const { currentTarget } = e;
        const inputs = Array.from(currentTarget.elements);
        const quantity = inputs.find(
          (input) => input.name === 'quantity'
        )?.value;

        updateItem({
          id,
          quantity: quantity && parseInt(quantity),
        });
      }

      return (
        <form className={styles.cartQuantity} onSubmit={handleOnSubmit}>
          <input
            name="quantity"
            type="number"
            min={0}
            defaultValue={quantity}
          />
          <button className={styles.button}>Update</button>
        </form>
      );
    };

    return {
      id,
      title,
      quantity: <Quantity />,
      pricePerItem: pricePerItem.toFixed(2),
      total: (quantity * pricePerItem).toFixed(2),
    };
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>MEG SHOP</title>
        <link rel="icon" href="/baby.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <HiShoppingBag /> Cart
        </h1>

        <Table className={styles.table} data={data} columns={columns} />

        <p className={styles.checkout}>
          <button className={styles.button} onClick={checkout}>
            Check Out
          </button>
        </p>
      </main>

      <footer>
        <section className={styles.footer}>
          Made by{' '}
          <a
            href="https://github.com/hakangundogdu"
            target="_blank"
            rel="noreferrer"
          >
            Hakan Gundogdu
          </a>
        </section>
      </footer>
    </div>
  );
}