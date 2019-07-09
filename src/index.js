import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom";

const AppJsx = (
    <HashRouter>
        <App />
    </HashRouter>
)
ReactDOM.render(AppJsx, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();