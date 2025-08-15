export default function Cart({ cart }) {
  const totalQuantity = cart.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <section className='bg-white p-6 rounded-2xl space-y-8'>
      <h2 className='text-custom-Red font-bold text-2xl'>
        Your Cart ({totalQuantity})
      </h2>
      <div className='flex flex-col gap-6 w-full'>
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
    </section>
  );
}
