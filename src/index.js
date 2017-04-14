import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

firebase.initializeApp({
	apiKey: "AIzaSyCiTNoyw8zvDqEDO078Cb6PAM-nuI1keuA",
    authDomain: "pseudogram-510de.firebaseapp.com",
    databaseURL: "https://pseudogram-510de.firebaseio.com",
    projectId: "pseudogram-510de",
    storageBucket: "pseudogram-510de.appspot.com",
    messagingSenderId: "496357585551"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
