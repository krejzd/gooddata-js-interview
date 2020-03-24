import React, {useContext} from 'react';
import {ColumnChart} from "@gooddata/react-components";
import CatalogContext from "../../catalog/context";
import {getGrossProfitMeasure} from "../../data/measure/grossProfit";
import {getViewByMonth} from "../../data/viewBy/month";
import {Typography} from "@material-ui/core";
import {useChartStyle} from "../../style/chartStyle";

const GrossProfitChart: React.FC = () => {
  const C = useContext(CatalogContext);
  const classes = useChartStyle();

  const measures = [getGrossProfitMeasure(C)];
  const viewBy = getViewByMonth(C);

  return (
    <div className={classes.container}>
      <Typography variant="h5">$ Gross Profit - All months</Typography>
      <div className={classes.chartContainer}>
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={C.projectId}
        />
      </div>
    </div>
  );
};

export default GrossProfitChart;