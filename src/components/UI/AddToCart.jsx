import { useState } from "react";

import ButtonOrange from "./ButtonOrange";
import QuantityButton from "./QuantityButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(1);

  const onSubstract = () => {
    if (itemQuantity === 1) {
      return;
    }

    setItemQuantity((prev) => prev - 1);
  };

  const onAdd = () => {
    setItemQuantity((prev) => prev + 1);
  };

  const onAddItem = () => {
    const { id, slug, name, price } = product;

    dispatch(
      cartActions.addItem({
        item: { id, slug, name, price },
        quantity: itemQuantity,
      }),
    );
  };

  return (
    <div className="flex gap-8">
      <QuantityButton
        itemQuantity={itemQuantity}
        onSubstract={onSubstract}
        onAdd={onAdd}
      />
      <ButtonOrange onClick={onAddItem}>Add to cart</ButtonOrange>
    </div>
  );
};

export default AddToCart;
