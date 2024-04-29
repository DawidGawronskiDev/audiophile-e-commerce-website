import CategoryItem from "./CategoryItem";

import EarphonesImage from "/src/assets/shared/desktop/image-category-thumbnail-earphones.png";
import HeadphonesImage from "/src/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImage from "/src/assets/shared/desktop/image-category-thumbnail-speakers.png";

const CategoryList = () => {
  return (
    <ul className="mx-6 my-16 flex flex-col items-center justify-center gap-16">
      <CategoryItem image={HeadphonesImage} label="Headphones" url="" />
      <CategoryItem image={SpeakersImage} label="Speakers" url="" />
      <CategoryItem image={EarphonesImage} label="Earphones" url="" />
    </ul>
  );
};

export default CategoryList;
