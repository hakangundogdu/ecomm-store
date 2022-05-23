import '../styles/globals.css';
import { CartContext, useCartState } from '../hooks/use-cart';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
    <CartContext.Provider value={cart}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </CartContext.Provider>
  );
}

export default MyApp;
