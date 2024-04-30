const currencyFormatter = (price) => {
  const formattedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formattedCurrency.format(price);
};

export default currencyFormatter;
