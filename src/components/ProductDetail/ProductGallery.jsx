import DynamicImage from "../UI/DynamicImage";

const ProductGallery = ({ gallery }) => {
  return (
    <div className="mx-6 max-w-5xl lg:mx-auto">
      <ul className="product-detail-gallery">
        {Object.values(gallery).map((item, index) => {
          return (
            <li key={index}>
              <DynamicImage
                mobile={`http://localhost:3000${item.mobile}`}
                tablet={`http://localhost:3000${item.tablet}`}
                desktop={`http://localhost:3000${item.desktop}`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductGallery;
