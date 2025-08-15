export default function Cart({
  cart,
  removeProduct,
  totalPrice,
  setOrderConfirm,
}) {
  // calculate total quantity to display
  const totalQuantity = cart.reduce((acc, cur) => acc + cur.quantity, 0);

  const cartList = cart.map((item) => {
    return (
      <li
        className='flex items-center justify-between border-b border-custom-Rose-100 py-2'
        key={item.id}
      >
        <div>
          <p className='font-semibold'>{item.name}</p>
          <div className='space-x-3'>
            <span className='text-custom-Red text-lg font-semibold'>
              {item.quantity}x
            </span>
            <span className='text-custom-Rose-500'>
              @ ${item.price.toFixed(2)}
            </span>
            <span className='text-custom-Rose-500 font-semibold'>
              ${(item.quantity * item.price).toFixed(2)}
            </span>
          </div>
        </div>
        <img
          className='border border-custom-Rose-300 rounded-full p-1 hover:bg-black/10 transition-all duration-300 active:scale-75 cursor-pointer '
          src='./public/images/icon-remove-item.svg'
          alt='remove button'
          onClick={() => removeProduct(item.id)}
        />
      </li>
    );
  });
  return (
    <section className='bg-white p-6 rounded-2xl space-y-4 shadow h-fit relative -top-8'>
      <h2 className='text-custom-Red font-bold text-2xl'>
        Your Cart ({totalQuantity})
      </h2>
      {cart.length > 0 ? (
        <>
          <ul>{cartList}</ul>
          <div className='flex items-center justify-between py-3'>
            <p>Order Total</p>
            <p className='text-2xl font-bold'>${totalPrice.toFixed(2)}</p>
          </div>
          <div className='flex gap-2 items-center bg-custom-Rose-100 rounded-md px-12 py-4'>
            <img
              src='./public/images/icon-carbon-neutral.svg'
              alt=' carbon neutral'
            />
            <p>
              This is a <span className='font-semibold'>Carbon-neutral</span>{' '}
              delivery
            </p>
          </div>
          <button
            className='bg-custom-Red text-custom-Rose-50 font-medium rounded-3xl w-full py-3 mt-2 hover:bg-amber-900 transition-colors duration-300 cursor-pointer'
            aria-label='confirm order'
            onClick={() => {
              setOrderConfirm(true);
              document.querySelector('body').style.overflow = 'hidden';
            }}
          >
            Confirm Order
          </button>
        </>
      ) : (
        <div className='flex flex-col gap-6 w-full mt-15'>
          <img
            src='./public/images/illustration-empty-cart.svg'
            alt='empty-cart'
            className='object-cover w-30 m-auto'
          />
          <p
            className='font-medium text-lg text-custom-Rose-500 text-center
        '
          >
            Your added items will appear here
          </p>
        </div>
      )}
    </section>
  );
}
