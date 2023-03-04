import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FluentProvider theme={teamsLightTheme}>
          <App />
        </FluentProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals(console.log);