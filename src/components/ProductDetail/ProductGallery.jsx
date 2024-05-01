const ProductGallery = ({ gallery }) => {
  return (
    <div className="mx-6">
      <ul className="grid gap-5">
        {Object.values(gallery).map((item, index) => {
          return (
            <li key={index}>
              <img
                src={`http://localhost:3000${item.mobile}`}
                alt=""
                className="rounded-lg"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductGallery;
