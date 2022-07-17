import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouterOutlet } from './core/modules/custom-router-dom';

import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import appRoutes from './app.routes';
import appMiddleware from './app.middlewares';
import rootReducer from './app.reducers';

import { Header } from './shared/components/layout';
import '../stylesheet/styles.scss';

function App() {
  const middlewares = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(middlewares, logger));
  
  middlewares.run(appMiddleware);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterOutlet routes={appRoutes} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
