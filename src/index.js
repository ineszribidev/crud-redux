import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';

const store = createStore(postReducer);
//composant parent App avec le composant Provider, afin que tous les composants enfants de notre application puissent accéder au store
//Le composant Provider prend le store comme prop.
ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>, document.getElementById('root')
);



