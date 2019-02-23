import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProgramAdministratorApp from './ProgramAdministratorApp';
import LoginPageApp from './components/login-page/login-page';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LoginPageApp />, document.getElementById('root'));
//ReactDOM.render(<ProgramAdministratorApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
