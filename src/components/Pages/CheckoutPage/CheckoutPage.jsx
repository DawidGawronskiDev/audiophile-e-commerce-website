/* eslint-disable react/prop-types */
import { useState } from "react";

import Checkout from "./Checkout";
import Modal from "./Modal";

const CheckoutPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div></div>
      <Checkout modalOpen={modalOpen} handleModalOpen={handleModalOpen} />
      <Modal modalOpen={modalOpen} />
    </>
  );
};

export default CheckoutPage;
