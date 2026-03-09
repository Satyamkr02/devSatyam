export const CURRENCY = {
  INR: '₹',
};

export const formatINR = (amount, space = false) => {
  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
  }).format(amount);

  return space ? `₹ ${formatted}` : `₹${formatted}`;
};
