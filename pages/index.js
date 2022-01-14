import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import products from '../products.json';
import { HiShoppingBag } from 'react-icons/hi';
import useCart from '../hooks/use-cart';

export default function Home() {
  const { subtotal, totalItems, addToCart, checkout } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>MEG SHOP</title>
        <meta name="E-commerce shop" content="Generated by create next app" />
        <link rel="icon" href="/baby.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to MEG Shop!</h1>

        <p className={styles.description}>High-quality clothing for babies.</p>

        <ul className={styles.cart}>
          <li>
            <strong>Items:</strong> {totalItems}
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

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, image, price } = product;
            return (
              <li key={id} className={styles.card}>
                <a href="#">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>${price}</p>
                  <p>
                    <button
                      className={styles.button}
                      onClick={() => {
                        addToCart({ id });
                      }}
                    >
                      Add to Cart
                    </button>
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
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
