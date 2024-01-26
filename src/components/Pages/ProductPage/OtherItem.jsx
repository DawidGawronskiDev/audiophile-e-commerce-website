import { Link, useLoaderData } from "react-router-dom";

const OtherItem = ({ item }) => {
  const loaderData = useLoaderData();

  const product = loaderData.data.find((product) => product.slug === item.slug);

  return (
    <li>
      <Link
        to={`/category/${product.category}/product/${product.slug}`}
        className="grid gap-4"
      >
        <div className="bg-grey-900 aspect-video rounded-lg grid items-center">
          <picture className="grid items-center justify-items-center">
            <source src={item.image.mobile} media="(max-width: 375px)" />
            <source src={item.image.tablet} media="(max-width: 768px)" />
            <source src={item.image.desktop} media="(max-width: 1440px)" />
            <img src={item.image.desktop} alt="" className="w-1/2" />
          </picture>
        </div>
        <h5 className="text-center">{item.name}</h5>
      </Link>
    </li>
  );
};

export default OtherItem;
