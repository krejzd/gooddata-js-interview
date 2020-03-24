import {CatalogHelper} from "@gooddata/react-components";
import moment from "moment";
import {getDayFilter} from "./dayFilter";

export enum Months {
  January = 0,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export const monthNames = {
  [Months.January]: 'January',
  [Months.February]: 'February',
  [Months.March]: 'March',
  [Months.April]: 'April',
  [Months.May]: 'May',
  [Months.June]: 'June',
  [Months.July]: 'July',
  [Months.August]: 'August',
  [Months.September]: 'September',
  [Months.October]: 'October',
  [Months.November]: 'November',
  [Months.December]: 'December',
};

export const getMonthFilter = (C: CatalogHelper, year: number, month: Months, monthTo = month) => {
  const from = moment().year(year).month(month).startOf('month');
  const to = moment().year(year).month(monthTo).endOf('month');

  return getDayFilter(C, from, to)
};
