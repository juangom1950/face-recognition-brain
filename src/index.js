import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

//To work with css in this project we install a library called "tachyons". This is a resoponsive css library
//npm install tachyons

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
