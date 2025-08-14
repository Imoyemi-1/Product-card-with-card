import { useState } from 'react';
import ProductCard from './components/ProductCard';
import { Products } from './data/product';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const cards = Products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        bgImg={product.image}
        category={product.category}
        name={product.name}
        price={product.price}
        setCart={setCart}
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
