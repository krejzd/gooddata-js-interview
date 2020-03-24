import {CatalogHelper, Model} from "@gooddata/react-components";
import {Moment} from "moment";

export const getDayFilter = (C: CatalogHelper, from: Moment, to: Moment) => {
  return Model.absoluteDateFilter(C.dateDataSet('Date (Date)'), from.format('YYYY-MM-DD'), to.format('YYYY-MM-DD'))
};