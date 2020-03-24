import React, {useContext} from 'react';
import {ColumnChart} from "@gooddata/react-components";
import CatalogContext from "../../catalog/context";
import {getGrossProfitMeasure} from "../../data/measure/grossProfit";
import {getViewByMonth} from "../../data/viewBy/month";

const GrossProfitChart: React.FC = () => {
  const C = useContext(CatalogContext);

  const measures = [getGrossProfitMeasure(C)];
  const viewBy = getViewByMonth(C);

  return (
    <div>
      <h1>$ Gross Profit - All months</h1>
      <div style={{height: 400}}>
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