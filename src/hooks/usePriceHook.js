export const usePriceHook = () => {
  const formatShowPrice = (price) => {
    let total = price;
    let formatNum = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    console.log(formatNum);

    return formatNum;
  };

  const formatPrice = (price) => {
    const total = price;
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(total);
  };

  const calSingleTicketTotal = (price, quantity) => {
    const total = price * quantity;
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(total);
  };

  const calConvenience = (price) => {
    const total = price * 0.02;
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(total);
  };

  return { formatPrice, calSingleTicketTotal, calConvenience, formatShowPrice };
};
