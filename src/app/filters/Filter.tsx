import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {Control} from "../../filter/filter";
import FilterContext from "../../filter/context";

type Props = {
  control: Control
};

const Filter: React.FC<Props> = ({children, control}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open filter</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Filtration</DialogTitle>
        <DialogContent>
          <FilterContext.Provider value={control}>
            {children}
          </FilterContext.Provider>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Filter;