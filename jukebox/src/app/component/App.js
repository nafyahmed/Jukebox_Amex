import React from "react";
import ReactDOM from 'react-dom';
import {Header} from './Header';
import {Jukebox} from './Jukebox';
import * as firebase from 'firebase';
import {Queue} from './Queue';
import Audio from 'react-audioplayer';
import $ from 'jquery';

import ReactAudioPlayer from 'react-audio-player';




export class App extends React.Component {

    constructor(){
        super();

        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);

        this.state= {
            authenticated: false,
            currentUser: null,
            email: null,
            pass: null,
            loading: true,
            songs: { },
            list: []
        }
    }
    login() {
        const email = txtEmail.value.toString();
   //     console.log("email = " + email);
        const pass = txtPassword.value.toString();
   //     console.log("pass = " + pass);
        if(email == ""){
            //error message
        }
        if(pass == ""){
            //error message
        }
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(function(error){
            if(error) {
      //          console.log("Error");
                return;
            }
      //      console.log("successssssssss");
/*            this.setState(prevState => ({
                authenticated: true
            }));*/
/*            this.setState(({
                authenticated: true
            }));
            auth.signInWithEmailAndPassword(email, pass);*/

        });
    }

    signup(){
        const email = txtEmail.value.toString();
        console.log("email = " + email);
        const pass = txtPassword.value.toString();
        console.log("pass = " + pass);
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(function(error){
            if(error) {
                console.log(error);
                return;
            }
            console.log("successssssssss");
            this.setState(prevState => ({
                authenticated: true
            }));
        });    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userRef = firebase.database().ref().child('users');
                const currentUser = userRef.child(user.uid);
                const songQueue = currentUser.child('song_queue');
                var returnArr = [];
            //    console.log("auth is now true");
            //    console.log("current user currently equals = " + user.uid);
                this.setState({
                    authenticated: true,
                    currentUser: user.uid,
                })
            } else {

            }
        })
    }


    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userRef = firebase.database().ref().child('users');
                const currentUser = userRef.child(user.uid);
                const songQueue = currentUser.child('song_queue');
                var returnArr = [];
         //       console.log("auth is now true");
          //      console.log("current user currently equals = " + user.uid);
                this.setState({
                    authenticated: true,
                    currentUser: user.uid,
                })
            } else {

            }
        })
    }


    render() {

        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');
        const btnLogin = document.getElementById('btnLogin');
        const btnSignUp = document.getElementById('btnSignUp');
        const btnLogout = document.getElementById('btnLogout');

        var play = false;

        function view() {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    console.log("signed in!");
                    return (<h1>hello world</h1>);

                } else {
                    // No user is signed in.
                    console.log("not signed in");

                }
            });
        }
            if(this.state.authenticated == false){
                return(
                    <div id="loginMenu" className="container">
                        <div className="row" id="loginMenu2">
                            <div className="col-md-4"></div>
                            <div className="col-md-4 login-box">
                                <div className="col-lg-12 login-key">
                                    <i className="fa fa-key"></i>
                                </div>
                                <div className="col-lg-12 login-title">
                                    American Express Jukebox
                                </div>
                                <div className="col-lg-12 login-form">
                                    <div className="col-lg-12 login-form">
                                        <input id="txtEmail" className="form-control" type="email" placeholder = "Email"></input>
                                        <input id="txtPassword" className="form-control" type="password" placeholder="Password"></input>
                                    </div>
                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-12 login-btm login-text">
                                        </div>
                                        <div className="col-lg-12 login-btm login-button">
                                            <button id="btnLogin" className="btn btn-outline-primary" onClick={this.login}>Login</button>
                                            <button id="btnSignUp" className="btn btn-outline-primary" onClick={this.signup}>Sign up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 id="title">Available Songs</h4>
                        <div id="songSample">
                            <div>
                                <a href="#"><span>Gives you Hell</span></a>
                                <a href="#"><span>Believe</span></a>
                                <a href="#"><span>Accidentally in Love</span></a>
                                <a href="#"><span>All Star</span></a>
                                <a href="#"><span>Best of You</span></a>
                                <a href="#"><span>7 Years</span></a>
                            </div>
                        </div>
                    </div>


                );
            }
            if(this.state.authenticated == true){
                return(
                    <div id="nav">
                        <div className="row_header">
                            <div className="col-xs-10.col-xs-offset-1">
                                <Header/>
                            </div>
                        </div>
                        <div className="row_block">
                            <div className="col-xs-10.col-xs-offset-1">
                            </div>
                        </div>
                        { /* Jukebox */ }
                        <div className="row_jukebox">
                            <div className="col-xs-10.col-xs-offset-1">
                                <Jukebox user={this.state.speed} />
                            </div>
                        </div>
                        <div className="imgOne">
                            <div className='queueContainer'>
                                <Queue user={this.state.currentUser}/>
                            </div>
                            <button id="play">Play</button>
                            <button id="next">Next</button>
                            <button id="stop">Stop</button>
                        </div>
                    </div>
                 );

            }
        }
    }


