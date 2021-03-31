import moment from 'moment';

export const toCurrency = (sign = '$') => (a?: string): string | undefined =>
  a ? `${sign ? sign + ' ' : ''}${a}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : a;
export const fromCurrency = (b?: string): string | undefined =>
  b ? b.replace(/\$\s?|\€\s?|\£\s?|(,*)/g, '') : b;
export const date = (c?: string, d?: string): string | undefined =>
  c ? moment(c).format('Do MMM YYYY') : d;
export const toPhone = (e: string): string | undefined =>
  e ? e.replace(/^0{2}/g, '+') : e;
