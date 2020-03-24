import React from 'react';
import {Control} from "./filter";

const FilterContext = React.createContext<Control>({} as Control);
export default FilterContext;