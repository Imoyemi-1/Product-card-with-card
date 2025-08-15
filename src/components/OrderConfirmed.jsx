export default function OrderConfirmed({
  cart,
  totalPrice,
  setOrderConfirm,
  setCart,
}) {
  const orderList = cart.map((item) => {
    return (
      <li
        className='flex items-center justify-between border-b border-custom-Rose-100 py-3'
        key={item.id}
      >
        <div className='flex gap-4'>
          <img src={item.img} alt={item.name} className='max-w-14' />
          <div>
            <p className='font-semibold'>{item.name}</p>
            <div className='space-x-3'>
              <span className='text-custom-Red text-lg font-semibold'>
                {item.quantity}x
              </span>
              <span className='text-custom-Rose-500'>
                @ ${item.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <span className='text-custom-Rose-900 font-semibold'>
          ${(item.quantity * item.price).toFixed(2)}
        </span>
      </li>
    );
  });

  return (
    <div className='fixed top-0 left-0 w-full h-full z-50  p-4 flex justify-center bg-black/80 overflow-y-auto'>
      <div className='bg-white p-7 rounded-md shadow space-y-4 max-w-[550px] w-full h-fit m-auto'>
        <img
          src='/images/icon-order-confirmed.svg'
          alt='order confirmed icon'
        />
        <div>
          <h1 className='text-3xl font-bold'>Order Confirmed</h1>
          <span className='text-custom-Rose-300'>
            We hope you enjoy your food!
          </span>
        </div>

        <div className='bg-custom-Rose-50 rounded-md p-6 pb-0'>
          <ul>{orderList}</ul>
          <div className='flex items-center justify-between py-6'>
            <p>Order Total</p>
            <p className='text-2xl font-bold'>${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <button
          className='bg-custom-Red text-custom-Rose-50 font-medium rounded-3xl w-full py-3 mt-2 hover:bg-amber-900 transition-colors duration-300 cursor-pointer'
          aria-label='start new order'
          onClick={() => {
            setCart([]);
            setOrderConfirm(false);
            document.querySelector('body').style.overflow = 'auto';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
