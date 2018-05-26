import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import phonesSaga from './store/sagas/saga'
import phoneReducer from './store/reducers/phones'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(phoneReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(phonesSaga)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
