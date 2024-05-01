import Body from "./UI/Body";
import HeadingL from "./UI/HeadingL";

const ProductIncludes = ({ includes }) => {
  return (
    <div className="mx-6 flex flex-col gap-6">
      <HeadingL>
        <span>In the box</span>
      </HeadingL>
      <ul className="flex flex-col gap-2">
        {includes.map((item) => {
          return (
            <li
              key={item.item}
              className="flex items-center justify-start gap-6"
            >
              <span>{item.quantity}x</span>
              <Body>
                <span className="opacity-50">{item.item}</span>
              </Body>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductIncludes;
