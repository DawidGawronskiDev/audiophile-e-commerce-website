import Body from "../UI/Body";
import HeadingL from "../UI/HeadingL";

const ProductFeatures = ({ features }) => {
  return (
    <div className="mx-6 flex flex-col justify-center items-start gap-6">
      <HeadingL>Features</HeadingL>
      <Body>
        <span className="opacity-50">{features}</span>
      </Body>
    </div>
  );
};

export default ProductFeatures;
