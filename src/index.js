// modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

//components
import Header from "./layouts/Header.js";
import Main from './components/Main/Main.js';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" render={Header}/>
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);