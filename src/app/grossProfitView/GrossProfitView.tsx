import React from 'react';
import {useParams} from "react-router-dom";
import MonthFilter from "../filters/MonthFilter";
import Filter from "../filters/Filter";
import {useFilter} from "../../filter/filter";
import GrossProfitMonthChart from "../../charts/grossProfit/GrossProfitMonthChart";
import GrossProfitChart from "../../charts/grossProfit/GrossProfitChart";
import {Months} from "../../data/filter/monthFilter";

const GrossProfitView: React.FC = () => {
  const { defaultMonth } = useParams();
  const defaultMonthNumber = defaultMonth ? parseInt(defaultMonth) : null;
  const {control} = useFilter({'month': defaultMonthNumber || Months.January});

  const month = control.getValue('month');
  window.history.replaceState({}, '', `/gross-profit/${month}`);

  return (
    <div>
      <Filter control={control}>
        <MonthFilter name="month" />
      </Filter>
      <GrossProfitMonthChart month={month}/>
      <GrossProfitChart />
    </div>
  );
};

export default GrossProfitView;