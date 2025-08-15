import { useState } from 'react';
import ProductCard from './components/ProductCard';
import { Products } from './data/product';
import Cart from './components/Cart';
import OrderConfirmed from './components/OrderConfirmed';

function App() {
  const [cart, setCart] = useState([]);
  const [orderConfirm, setOrderConfirm] = useState(false);

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

  // calculate total price

  const totalPrice = cart.reduce(
    (acc, cur) => acc + cur.quantity * cur.price,
    0
  );

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
      <Cart
        cart={cart}
        totalPrice={totalPrice}
        removeProduct={removeProduct}
        setOrderConfirm={setOrderConfirm}
      />
      {orderConfirm && <OrderConfirmed cart={cart} totalPrice={totalPrice} />}
    </>
  );
}

export default App;
