import moment from 'moment';

export const toCurrency = (a?: string | number): string =>
  a ? `$${a}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 'not found';
export const fromCurrency = (b?: string): number | string =>
  b ? b.replace(/\$\s?|(,*)/g, '') : 'not found';
export const date = (c?: string, d?: string): string =>
  c ? moment(c).format('Do MMM YYYY') : d || 'no date';
export const toPhone = (e: string): string => e ? e.replace(/^0{2}/g, '+') : 'not found';
