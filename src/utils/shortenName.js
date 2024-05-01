const shortenName = (name) => {
  const shortenName = name
    .split(" ")
    .reduce((acc, val) => {
      if (val.length < 5) {
        acc.push(val);
      }
      return acc;
    }, [])
    .join(" ");

  return shortenName;
};

export default shortenName;
