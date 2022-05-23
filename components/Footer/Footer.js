import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
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
  );
};

export default Footer;
