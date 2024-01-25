const Item = ({ item }) => {
  return (
    <li className="flex gap-6">
      <span className="body font-bold text-orange-900 w-6">
        {item.quantity}x
      </span>
      <span className="flex-1">{item.item}</span>
    </li>
  );
};

export default Item;
