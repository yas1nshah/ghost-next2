function formatAmount(amount: number) {
  if (amount >= 10000000) {
    // Amount is 1 Crore or more
    const crorePart = Math.floor(amount / 10000000);
    const remainder = amount % 10000000;
    const lakhPart = remainder >= 100000 ? Math.floor(remainder / 100000) : 0;
    const formattedAmount = lakhPart > 0 ? `${crorePart},${lakhPart} Crores` : `${crorePart} Crores`;
    return formattedAmount;
  } else if (amount >= 100000) {
    // Amount is 1 Lakh or more
    const lakhPart = Math.floor(amount / 100000);
    const remainder = amount % 100000;
    const formattedAmount = remainder > 0 ? `${lakhPart}.${remainder} Lakh` : `${lakhPart} Lakh`;
    return formattedAmount;
  } else {
    // Amount is less than 1 Lakh
    const formattedAmount = Math.floor(amount); // Remove decimal part
    return `${formattedAmount} Rupees`;
  }
}

export default formatAmount;
