import { ButtonShop } from "../Buttons";

const Category = ({ name }) => {
  return (
    <li className="h-[165px] bg-grey-900 flex flex-col justify-center items-center relative rounded-lg gap-4">
      <img
        className="w-[150px] absolute -top-1/3"
        src={`/assets/shared/desktop/image-category-thumbnail-${name}.png`}
        alt=""
      />
      <div className="absolute bottom-6 grid items-center justify-items-center gap-4">
        <h6>{name}</h6>
        <ButtonShop text={"Shop"} name={name} />
      </div>
    </li>
  );
};

const Categories = () => {
  const categories = ["headphones", "speakers", "earphones"];

  return (
    <section>
      <div className="container-center">
        <ul className="grid gap-16 tablet:grid-cols-3 tablet:gap-4 desktop:gap-8">
          {categories.map((category, index) => (
            <Category name={category} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
