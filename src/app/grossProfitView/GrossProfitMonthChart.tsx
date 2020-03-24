import React, {useContext} from 'react';
import {ColumnChart} from "@gooddata/react-components";
import CatalogContext from "../../catalog/context";
import {getGrossProfitMeasure} from "../../data/measure/grossProfit";
import {getMonthFilter, Months} from "../../data/filter/monthFilter";

type Props = {
  month: Months
}

const GrossProfitMonthChart: React.FC<Props> = ({month}) => {
  const C = useContext(CatalogContext);

  const filters = [getMonthFilter(C, 2016, month)];
  const measures = [getGrossProfitMeasure(C)];

  return (
    <div>
      <h1>$ Gross Profit in month {month} of 2016</h1>
      <div style={{height: 400}}>
        <ColumnChart
          measures={measures}
          filters={filters}
          projectId={C.projectId}
        />
      </div>
    </div>
  );
};

export default GrossProfitMonthChart;