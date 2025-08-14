import { useState } from 'react';
import ProductCard from './components/ProductCard';
import { Products } from './data/product';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const quantity = (id) => {
    return cart.find((item) => item.id === id);
  };
  const increaseQuantity = (id) => {
    setCart((prevState) =>
      prevState.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      })
    );
  };

  const cards = Products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        bgImg={product.image}
        category={product.category}
        name={product.name}
        price={product.price}
        setCart={setCart}
        id={product.id}
        isInCart={isInCart}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
      />
    );
  });
  return (
    <>
      <h1 className='text-4xl font-bold text-custom-Rose-900'>Desserts</h1>
      <main className='grid gap-6'>{cards}</main>
      <Cart cart={cart} />
    </>
  );
}

export default App;
