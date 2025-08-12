export default function ProductCard({ bgImg, name }) {
  //   console.log();
  return (
    <article>
      <picture>
        <source media='()' />
      </picture>
      <img src={bgImg.desktop} alt={name} className='w-full' />
    </article>
  );
}
