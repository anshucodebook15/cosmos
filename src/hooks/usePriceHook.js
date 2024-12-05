export const usePriceHook = () => {
  const formatPrice = (price) => {
    let total = price;
    let formatNum = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    console.log(formatNum);

    return formatNum;
  };

  const calSingleTicketTotal = (price, quantity) => {
    const total = price * quantity;
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(total);
  };

  return { formatPrice, calSingleTicketTotal };
};
