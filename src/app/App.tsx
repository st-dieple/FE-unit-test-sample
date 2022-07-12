import React from 'react';
import '../stylesheet/styles.scss';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './shared/components/layout';
import { RouterOutlet } from './core/modules/custom-router-dom';
import appRoutes from './app.routes';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <RouterOutlet routes={appRoutes}/>
    </BrowserRouter>
  );
}

export default App;
