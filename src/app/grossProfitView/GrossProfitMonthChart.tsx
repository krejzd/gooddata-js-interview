import React, {useContext} from 'react';
import {ColumnChart} from "@gooddata/react-components";
import CatalogContext from "../../catalog/context";
import {getGrossProfitMeasure} from "../../data/measure/grossProfit";
import {getMonthFilter, Months} from "../../data/filter/monthFilter";
import {Typography} from "@material-ui/core";
import {useChartStyle} from "../../style/chartStyle";

type Props = {
  month: Months
}

const GrossProfitMonthChart: React.FC<Props> = ({month}) => {
  const C = useContext(CatalogContext);
  const classes = useChartStyle();

  const filters = [getMonthFilter(C, 2016, month)];
  const measures = [getGrossProfitMeasure(C)];

  return (
    <div className={classes.container}>
      <Typography variant="h5">$ Gross Profit in month {month} of 2016</Typography>
      <div className={classes.chartContainer}>
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