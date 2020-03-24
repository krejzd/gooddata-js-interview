import React, {useContext} from 'react';
import {ColumnChart, Model} from "@gooddata/react-components";
import CatalogContext from "../../catalog/context";

const GrossProfitView: React.FC = () => {
  const C = useContext(CatalogContext);

  const monthFilter = Model.absoluteDateFilter(C.dateDataSet('Date (Date)'), '2016-01-01', '2016-01-31');

  const getMeasures = () => {
    return [
      {
        measure: {
          localIdentifier: 'm1',
          definition: {
            measureDefinition: {
              item: {
                identifier: C.measure('$ Gross Profit')
              }
            }
          },
          alias: '$ Gross Profit'
        }
      }
    ]
  };

  const getViewBy = () => {
    return {
      visualizationAttribute:
        {
          displayForm: {
            identifier: C.dateDataSetDisplayForm('Date (Date)', 'Month/Year (Date)')
          },
          localIdentifier: 'a1'
        }
    }
  };

  const renderDropdown = () => {
    return (
      <select defaultValue="1">
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    )
  };

  const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
  const filters = [monthFilter];
  const measures = getMeasures();
  const viewBy = getViewBy();

  return (
    <div className="App">
      <h1>$ Gross Profit in month {renderDropdown()} 2016</h1>
      <div>
        <ColumnChart
          measures={measures}
          filters={filters}
          projectId={projectId}
        />
      </div>
      <h1>$ Gross Profit - All months</h1>
      <div>
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={projectId}
        />
      </div>
    </div>
  );
};

export default GrossProfitView;