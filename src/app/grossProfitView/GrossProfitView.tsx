import React from 'react';
import MonthFilter from "../filters/MonthFilter";
import Filter from "../filters/Filter";
import {useFilter} from "../../filter/filter";
import GrossProfitMonthChart from "./GrossProfitMonthChart";
import GrossProfitChart from "./GrossProfitChart";
import {Months} from "../../data/filter/monthFilter";

const GrossProfitView: React.FC = () => {
  const {control} = useFilter({'month': Months.January});

  return (
    <div>
      <Filter control={control}>
        <MonthFilter name="month" />
      </Filter>
      <GrossProfitMonthChart month={control.getValue('month')}/>
      <GrossProfitChart />
    </div>
  );
};

export default GrossProfitView;