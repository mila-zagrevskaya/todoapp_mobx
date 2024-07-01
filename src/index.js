import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import { App } from 'components/App';
import { TodoStore } from './components/TodoComponent/store';

const stores = {
  TodoStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
