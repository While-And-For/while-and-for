const formatCurrency = (currency: string | number): string =>
  `$${currency}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default formatCurrency;
