import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appReducer from './components/reducers/appReducer';
import {loadState,saveState} from './util/localStorage'

const localState = loadState();
//console.log("localState : ",localState);
const store = createStore(appReducer,localState);
store.subscribe(()=>{
    //console.log("STORE: ",store.getState())
    saveState(store.getState())
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
