const ProductItem = ({ product }) => {
  return (
    <li key={product.name} className="grid gap-8">
      <img
        src={product.image.mobile}
        alt={`Image of ${product.name}`}
        className="rounded-lg"
      />
      <div className="text-center grid gap-6">
        {product.new && (
          <p className="uppercase font-normal text-sm tracking-widest">
            New Product
          </p>
        )}
        <h1 className="font-bold text-3xl tracking-wide uppercase">
          {product.name}
        </h1>
        <p className="font-medium text-base leading-6 opacity-50">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button className="bg-orange-600 px-8 py-4 uppercase text-sm font-bold m-auto text-white">
          See product
        </button>
      </div>
    </li>
  );
};

export default ProductItem;