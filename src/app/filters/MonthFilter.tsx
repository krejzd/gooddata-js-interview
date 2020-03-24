import React, {useContext} from 'react';
import {FormControl, Input, makeStyles, MenuItem, Select} from "@material-ui/core";
import FilterContext from "../../filter/context";
import {monthNames} from "../../data/filter/monthFilter";

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
        {
          Object.values(monthNames).map((monthName, month) => (
            <MenuItem key={month} value={month}>{monthName}</MenuItem>
          ))
        }
      </Select>
    </FormControl>

  );
};

export default MonthFilter;