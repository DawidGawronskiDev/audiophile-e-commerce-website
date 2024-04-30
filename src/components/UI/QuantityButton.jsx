const QuantityButton = ({ itemQuantity, onSubstract, onAdd }) => {
  return (
    <div className="flex *:aspect-square *:w-12 bg-gray-100 w-min">
      <button onClick={onSubstract}>-</button>
      <div className="grid content-center text-center">
        <span>{itemQuantity}</span>
      </div>
      <button onClick={onAdd}>+</button>
    </div>
  );
};

export default QuantityButton;
