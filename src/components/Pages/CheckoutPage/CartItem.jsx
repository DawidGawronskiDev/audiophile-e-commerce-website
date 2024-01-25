const CartItem = ({ item }) => {
  const name = item.name
    .split(" ")
    .reduce((acc, val) => {
      if (val.length < 5) {
        acc.push(val);
      }
      return acc;
    }, [])
    .join(" ");

  return (
    <li className="flex items-center gap-4 text-[15px]">
      <div className="w-16 aspect-square bg-grey-800">
        <img src={item.image.mobile} alt="" className="rounded-lg " />
      </div>
      <div className="flex-1">
        <h6 className="leading-[25px]">{name}</h6>
        <span className="font-bold text-black-900/50 text-[14px] leading-[25px]">
          &#36; {item.price}
        </span>
      </div>
      <span className="text-black-900/50 font-bold">x{item.quantity}</span>
    </li>
  );
};

export default CartItem;
