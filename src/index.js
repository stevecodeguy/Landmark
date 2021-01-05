import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModalProvider } from './modal_context/ModalContext';
import { ScreenProvider } from './modal_context/ScreenContext';

ReactDOM.render(
  <React.StrictMode>
    <ScreenProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ScreenProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
