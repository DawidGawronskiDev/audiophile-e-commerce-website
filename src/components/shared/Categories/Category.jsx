import { ButtonShop } from "../Buttons";

const Category = ({ name }) => {
  return (
    <li className="h-[125px] mobile:h-[165px] bg-grey-900 flex flex-col justify-center items-center relative rounded-lg gap-4">
      <img
        className="w-[100px] tablet:w-[150px] absolute -top-1/4 tablet:-top-1/3"
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

export default Category;
