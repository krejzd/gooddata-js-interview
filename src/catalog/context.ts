import React from 'react';
import CatalogHelperExtended from "./catalogHelper";

const CatalogContext = React.createContext<CatalogHelperExtended>({} as CatalogHelperExtended);
export default CatalogContext;