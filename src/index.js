import React from 'react';
import ReactDOM from 'react-dom/client';
import {FirebaseContext} from  './Store/Context'
import Context from './Store/Context' 
import firebase from './firebase/config'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{firebase}}>
  <Context>
    <App />
  </Context>
  </FirebaseContext.Provider>
);
