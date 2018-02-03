import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import Layout from './components/Layout.js';
import store from './store.js';

const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
	<HashRouter>
  	  <Route path='/' component={Layout}/>
  	</HashRouter>
  </Provider>, app);
