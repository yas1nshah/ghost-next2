function formatAmount(amount: number) {
  if (amount === 0) {
    return "Not For Sale";
  } else if (amount >= 10000000) {
    // Amount is 1 Crore or more
    const crorePart = Math.floor(amount / 10000000);
    const remainder = amount % 10000000;
    const lakhPart = remainder >= 100000 ? Math.floor(remainder / 100000) : 0;
    const formattedCrorePart = crorePart + (remainder > 0 ? "." + (remainder / 1000000).toFixed(2).slice(2) : ""); // Format crore part with two decimals
    return `${formattedCrorePart} Crore`;
  } else if (amount >= 100000) {
    // Amount is 1 Lakh or more
    const lakhPart = Math.floor(amount / 100000);
    const remainder = amount % 100000;
    const formattedLakhPart = lakhPart + (remainder > 0 ? "." + (remainder / 1000).toFixed(2).slice(2) : ""); // Format lakh part with two decimals
    return `${formattedLakhPart} Lakh`;
  } else {
    // Amount is less than 1 Lakh
    const formattedAmount = amount.toFixed(2); // Format amount to two decimal places
    return `${formattedAmount} Rupees`;
  }
}

export default formatAmount;
