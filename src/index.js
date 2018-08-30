import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weekly from './weekly/Weekly.js';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter basename="/">
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/weekly" component={Weekly}/>
    </div>
</BrowserRouter>, document.getElementById('root'));
// ReactDOM.render(<BrowserRouter basename="/sirius"><Route exact
//                                                          path="/weekly"/></BrowserRouter>, document.getElementById("weekly"))
registerServiceWorker();
