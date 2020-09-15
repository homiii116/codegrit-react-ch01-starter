import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppTwo from './AppTwo';
import * as serviceWorker from './serviceWorker';
import * as moment from 'moment-timezone';

const date = moment.tz(moment(), 'Asia/Tokyo').format('YYYY年MM月DD日');

const RootReactElement = React.createElement(App, { date }, null);
ReactDOM.render(RootReactElement, document.getElementById('root'));

const RootTwoReactElement = React.createElement(AppTwo, null, null );
ReactDOM.render(RootTwoReactElement, document.getElementById('root-two'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
