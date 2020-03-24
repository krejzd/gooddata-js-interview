// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { CatalogHelper } from '@gooddata/react-components';
import catalogJson from './catalog.json';
import CatalogContext from "./catalog/context";
import GrossProfitView from "./app/grossProfitView/GrossProfitView";

class App extends Component {
    render() {
        return (
          <CatalogContext.Provider value={new CatalogHelper(catalogJson)}>
            <GrossProfitView />
          </CatalogContext.Provider>
        );
    }
}

export default App;
