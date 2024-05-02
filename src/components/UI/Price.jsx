import currencyFormatter from "../../utils/currencyFormatter";

const Price = ({ price }) => {
  return (
    <span className="font-bold text-lg tracking-wide">
      {currencyFormatter(price)}
    </span>
  );
};

export default Price;
