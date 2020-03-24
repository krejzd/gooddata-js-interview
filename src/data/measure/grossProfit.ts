import {CatalogHelper} from "@gooddata/react-components";

export const getGrossProfitMeasure = (C: CatalogHelper) => {
  return {
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
};