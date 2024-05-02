/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

import Body from "../UI/Body";
import QuantityButton from "../UI/QuantityButton";
import Price from "../UI/Price";

import shortenName from "../../utils/shortenName";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (item) {
      setImageSrc(`http://localhost:3000/images/cart/image-${item.slug}.jpg`);
    }
  }, [item]);

  const onSubstract = () => {
    dispatch(cartActions.substractItem(item.id));
  };

  const onAdd = () => {
    const { id, slug, name, price } = item;

    dispatch(
      cartActions.addItem({
        item: { id, slug, name, price },
        quantity: 1,
      }),
    );
  };

  return (
    <li key={item.id} className="flex items-center justify-between h-16">
      <div className="flex justify-start items-center gap-4">
        <img src={imageSrc} alt="" className="w-16 rounded-lg" />
        <div>
          <Body>{shortenName(item.name)}</Body>
          <Price price={item.price} />
        </div>
      </div>
      <QuantityButton
        itemQuantity={item.quantity}
        onSubstract={onSubstract}
        onAdd={onAdd}
      />
    </li>
  );
};

export default CartItem;
