import React from 'react';
import '../stylesheet/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import { Header } from './shared/components/layout';
import { RouterOutlet } from './core/modules/custom-router-dom';
import appRoutes from './app.routes';
import appMiddleware from './app.middlewares';
import rootReducer from './app.reducers';

function App() {
  const middlewares = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(middlewares, logger));

  middlewares.run(appMiddleware);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <RouterOutlet routes={appRoutes} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
