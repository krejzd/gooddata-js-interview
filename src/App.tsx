import React, {Component} from 'react';
import '@gooddata/react-components/styles/css/main.css';
import catalogJson from './catalog.json';
import CatalogContext from "./catalog/context";
import {BrowserRouter} from "react-router-dom";
import Content from "./app/common/Content";
import CatalogHelperExtended from "./catalog/catalogHelper";

class App extends Component {
    render() {
        return (
          <CatalogContext.Provider value={new CatalogHelperExtended(catalogJson)}>
              <BrowserRouter>
                <Content />
              </BrowserRouter>
          </CatalogContext.Provider>
        );
    }
}

export default App;
