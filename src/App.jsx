import ProductCard from './components/ProductCard';
import { Products } from './data/product';

function App() {
  const cards = Products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        bgImg={product.image}
        category={product.category}
        name={product.name}
        price={product.price}
      />
    );
  });
  return (
    <>
      <h1 className='text-4xl font-bold'>Desserts</h1>
      <main className='grid gap-2'>{cards}</main>
    </>
  );
}

export default App;
