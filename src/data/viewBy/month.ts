import {CatalogHelper} from "@gooddata/react-components";

export const getViewByMonth = (C: CatalogHelper) => {
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