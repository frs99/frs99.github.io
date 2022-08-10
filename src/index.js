import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import saturnEyesCss from './css/saturneyes.css';
import headerCss from './css/header.css';
import footerCss from './css/footer.css';
import aboutCss from './css/about.css';
import servicesCss from './css/services.css';
import indexCss from './css/index.css';
import mediaCss from './css/media.css';

import App from './App';



ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,document.body
);

