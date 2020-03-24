import React from 'react';
import {CatalogHelper} from "@gooddata/react-components";

const CatalogContext = React.createContext<CatalogHelper>({} as CatalogHelper);
export default CatalogContext;