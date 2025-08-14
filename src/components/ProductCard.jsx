export default function ProductCard({
  bgImg,
  name,
  category,
  price,
  setCart,
  id,
  isInCart,
  quantity,
  increaseQuantity,
}) {
  return (
    <article className='relative'>
      <picture>
        <source media='(min-width:1024px)' srcSet={bgImg.desktop} />
        <source media='(min-width:768px)' srcSet={bgImg.tablet} />
        <img
          src={bgImg.mobile}
          alt={name}
          className='w-full  object-cover rounded-md mb-10'
        />
      </picture>
      <span className='text-custom-Rose-400'>{category}</span>
      <p className='font-semibold text-custom-Rose-900'>{name}</p>
      <p className='font-semibold text-custom-Red'>${price.toFixed(2)}</p>
      {isInCart(id) ? (
        <div
          className='flex justify-between item-center py-2.5 px-4 w-41 rounded-4xl gap-2 bg-custom-Red shadow  absolute z-10 bottom-22 left-1/2
      -translate-x-1/2 border border-custom-Red text-custom-Rose-50'
        >
          <button className='cursor-pointer active:scale-95 '>
            <img
              className='border rounded-full py-1.5 px-0.5 '
              src='./public/images/icon-decrement-quantity.svg'
              alt='decrement quantity'
            />
          </button>
          <span className='text-custom-Rose-100 '>{quantity(id).quantity}</span>
          <button
            onClick={() => increaseQuantity(id)}
            className='cursor-pointer active:scale-95'
          >
            <img
              className='border rounded-full py-1 px-1 w-4.5 '
              src='./public/images/icon-increment-quantity.svg'
              alt='decrement quantity'
            />
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            setCart((prevState) => {
              return [...prevState, { id, name, price, quantity: 1 }];
            });
          }}
          className='flex py-2.5 px-6 rounded-4xl gap-2 bg-custom-Rose-50 shadow w-fit absolute z-10 bottom-22 left-1/2
      -translate-x-1/2 border border-custom-Rose-300 cursor-pointer'
        >
          <img src='./public/images/icon-add-to-cart.svg' alt='cart' />
          <span className='font-medium'>Add to Card</span>
        </button>
      )}
    </article>
  );
}
