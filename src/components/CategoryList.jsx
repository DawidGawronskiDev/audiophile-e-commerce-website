import CategoryItem from "./Category/CategoryItem";

import EarphonesImage from "/src/assets/shared/desktop/image-category-thumbnail-earphones.png";
import HeadphonesImage from "/src/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImage from "/src/assets/shared/desktop/image-category-thumbnail-speakers.png";

const CategoryList = () => {
  return (
    <ul className="mx-6 flex flex-col items-center justify-center gap-16">
      <CategoryItem
        image={HeadphonesImage}
        label="Headphones"
        link="/headphones"
      />
      <CategoryItem image={SpeakersImage} label="Speakers" link="/speakers" />
      <CategoryItem
        image={EarphonesImage}
        label="Earphones"
        link="/earphones"
      />
    </ul>
  );
};

export default CategoryList;
