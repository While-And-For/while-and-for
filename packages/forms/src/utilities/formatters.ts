import moment from 'moment';

export const toCurrency = (a?: string): string | undefined =>
  a ? `$ ${a}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : a;
export const fromCurrency = (b?: string): string | undefined =>
  b ? b.replace(/\$\s?|(,*)/g, '') : b;
export const date = (c?: string, d?: string): string | undefined =>
  c ? moment(c).format('Do MMM YYYY') : d;
export const toPhone = (e: string): string | undefined =>
  e ? e.replace(/^0{2}/g, '+') : e;
