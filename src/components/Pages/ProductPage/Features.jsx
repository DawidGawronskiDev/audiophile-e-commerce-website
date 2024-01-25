const Features = ({ product }) => {
  return (
    <div className="container-center">
      <div className="grid gap-6">
        <h3>Features</h3>
        <span className="body text-black-900/50">{product.features}</span>
      </div>
    </div>
  );
};

export default Features;
