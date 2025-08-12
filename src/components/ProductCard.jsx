export default function ProductCard({ bgImg, name, category, price }) {
  //   console.log();
  return (
    <article>
      <picture>
        <source media='(min-width:1024px)' srcSet={bgImg.desktop} />
        <source media='(min-width:768px)' srcSet={bgImg.tablet} />
        <img src={bgImg.mobile} alt={name} className='w-full lg' />
      </picture>
      <span>{category}</span>
      <p>{name}</p>
      <p>${price}</p>
      <div>
        <img src='./public/images/icon-add-to-cart.svg' alt='cart' />
        <span>Add to Card</span>
      </div>
    </article>
  );
}
