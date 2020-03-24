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

export const getMonthFilter = (C: CatalogHelper, year: number, month: Months, monthTo = month) => {
  const from = moment().year(year).month(month).startOf('month');
  const to = moment().year(year).month(monthTo).endOf('month');

  console.log(from.format('YYYY-MM-DD'));
  console.log(to.format('YYYY-MM-DD'));

  return getDayFilter(C, from, to)
};
