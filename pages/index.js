import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import products from '../products.json';
import { HiShoppingBag } from 'react-icons/hi';
import { useCart } from '../hooks/use-cart';
import Image from 'next/image';

export default function Home() {
  const { subtotal, totalQuantity, addToCart, checkout } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>MEG SHOP</title>
        <meta name="E-commerce shop" content="Generated by create next app" />
        <link rel="icon" href="/baby.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.description}>
          High-quality clothing for babies.
        </h1>

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

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, image, price } = product;
            return (
              <li key={id} className={styles.card}>
                <Link href={`/products/${id}`}>
                  <a>
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>${price}</p>
                  </a>
                </Link>

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
              </li>
            );
          })}
        </ul>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, image, price } = product;
            return (
              <li key={id} className={styles.card}>
                <Link href={`/products/${id}`}>
                  <a>
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>${price}</p>
                  </a>
                </Link>

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
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
