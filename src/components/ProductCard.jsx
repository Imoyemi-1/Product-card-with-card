import { useState } from 'react';

export default function ProductCard({
  bgImg,
  name,
  category,
  price,
  setCart,
  id,
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
      <button
        onClick={() =>
          setCart((prevState) => {
            return [...prevState, { id, name, price, count: 1 }];
          })
        }
        className='flex py-2.5 px-6 rounded-4xl gap-2 bg-custom-Rose-50 shadow w-fit absolute z-10 bottom-22 left-1/2
      -translate-x-1/2 border border-custom-Rose-300 cursor-pointer'
      >
        <img src='./public/images/icon-add-to-cart.svg' alt='cart' />
        <span className='font-medium'>Add to Card</span>
      </button>
    </article>
  );
}
