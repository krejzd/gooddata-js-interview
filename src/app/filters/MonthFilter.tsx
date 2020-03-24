import React, {useContext} from 'react';
import {FormControl, Input, makeStyles, MenuItem, Select} from "@material-ui/core";
import FilterContext from "../../filter/context";
import {Months} from "../../data/filter/monthFilter";

const useStyles = makeStyles(() => ({
 control: {
   width: 200,
 },
}));

type Props = {
  name: string
};

const MonthFilter: React.FC<Props> = ({name}) => {
  const classes = useStyles();
  const control = useContext(FilterContext);

  return (
    <FormControl className={classes.control}>
      <Select value={control.getValue(name)} onChange={e => control.setValue(name, e.target.value)} input={<Input />}>
        <MenuItem value={Months.January}>January</MenuItem>
        <MenuItem value={Months.February}>February</MenuItem>
        <MenuItem value={Months.March}>March</MenuItem>
        <MenuItem value={Months.April}>April</MenuItem>
        <MenuItem value={Months.May}>May</MenuItem>
        <MenuItem value={Months.June}>June</MenuItem>
        <MenuItem value={Months.July}>July</MenuItem>
        <MenuItem value={Months.August}>August</MenuItem>
        <MenuItem value={Months.September}>September</MenuItem>
        <MenuItem value={Months.October}>October</MenuItem>
        <MenuItem value={Months.November}>November</MenuItem>
        <MenuItem value={Months.December}>December</MenuItem>
      </Select>
    </FormControl>

  );
};

export default MonthFilter;