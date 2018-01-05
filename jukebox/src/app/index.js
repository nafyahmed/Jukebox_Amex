import React from "react";
import ReactDOM from 'react-dom';
import {App} from './component/App';
import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyDAF-q0VdJIDzTwBbGX3RW07IPiDMmfaKg",
    authDomain: "jukeb-db81f.firebaseapp.com",
    databaseURL: "https://jukeb-db81f.firebaseio.com",
    projectId: "jukeb-db81f",
    storageBucket: "jukeb-db81f.appspot.com",
    messagingSenderId: "364417049455"
};
firebase.initializeApp(config);
ReactDOM.render(<App/>, window.document.getElementById("app"));


