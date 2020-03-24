import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { CatalogHelper } from '@gooddata/react-components';
import catalogJson from './catalog.json';
import CatalogContext from "./catalog/context";
import {BrowserRouter} from "react-router-dom";
import Content from "./app/common/Content";

class App extends Component {
    render() {
        return (
          <CatalogContext.Provider value={new CatalogHelper(catalogJson)}>
              <BrowserRouter>
                <Content />
              </BrowserRouter>
          </CatalogContext.Provider>
        );
    }
}

export default App;
