import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as MobxProvider } from 'mobx-react'
import { rootStore } from './stores';

import './index.css';
import App from './App';

ReactDOM.render(
  <MobxProvider {...rootStore}>
    <App />
  </MobxProvider>, 
  document.getElementById('root')
);