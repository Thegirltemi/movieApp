import './index.css';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from 'react';



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <App />
</BrowserRouter>,
rootElement
);

