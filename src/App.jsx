import { useState } from 'react';
import ProductCard from './components/ProductCard';
import { Products } from './data/product';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  // check if product is already in the array
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  // find product and get the quantity in the cart array
  const quantity = (id) => {
    return cart.find((item) => item.id === id);
  };

  // increase product quantity amount in the cart
  const increaseQuantity = (id) => {
    setCart((prevState) =>
      prevState.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      })
    );
  };

  // decrease product quantity amount in the cart
  const decreaseQuantity = (id) => {
    setCart((prevState) =>
      prevState.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
      })
    );
  };

  // remove product is cart

  const removeProduct = (id) => {
    setCart((prevState) => prevState.filter((item) => item.id !== id));
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
        decreaseQuantity={decreaseQuantity}
        removeProduct={removeProduct}
      />
    );
  });

  return (
    <>
      <h1 className='text-4xl font-bold text-custom-Rose-900'>Desserts</h1>
      <main className='grid gap-6'>{cards}</main>
      <Cart cart={cart} removeProduct={removeProduct} />
    </>
  );
}

export default App;
