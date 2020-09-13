import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppTwo from './AppTwo';
import * as serviceWorker from './serviceWorker';

const RootReactElement = createElement(App, null, null);
ReactDOM.render(RootReactElement, document.getElementById('root'));

const RootTwoReactElement = createElement(AppTwo, null, null );
ReactDOM.render(RootTwoReactElement, 'root-two');

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
