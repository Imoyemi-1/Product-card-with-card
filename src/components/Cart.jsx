export default function Cart({ cart }) {
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
        />
      </li>
    );
  });
  return (
    <section className='bg-white p-6 rounded-2xl space-y-4'>
      <h2 className='text-custom-Red font-bold text-2xl'>
        Your Cart ({totalQuantity})
      </h2>
      {cart.length > 0 ? (
        <ul>{cartList}</ul>
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
