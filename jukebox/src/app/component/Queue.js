import React from "react";
import {Song} from './Song';
import {Jukebox} from './Jukebox';
import * as firebase from 'firebase';
import $ from 'jquery';
import Audio from 'react-audioplayer';



export class Queue extends React.Component {
    constructor(props){
        super();
        this.song ;
        this.state = {
            songs: 5
        };
    }
    render() {
        var theSong = [];
        if(this.props.user != null) {
        //    console.log("wtf = " + this.props.user);
            var word = this.props.user.toString();
            const userRef = firebase.database().ref().child('users');
            const currUser = userRef.child(word);
            const songQueue = currUser.child('song_queue');
   //         console.log("currUser = " +  currUser);
            var returnArr = [];
            var i = 0;
            songQueue.once('value', function(snapshot){
                snapshot.forEach(function(child){
                    var item = child.val();
      //              console.log("the value is = " + child.val());
        //            console.log("hello = " + $('.row_block').html());
          //          console.log($('.song_vale').length);
                    //add if statement
                    if($('#' + i).length){

                    }else {
                        $('#song_list').append('<li class="song_value"><button class="delete_button" id="' + i + '">x</button>' + child.val() + '</li>');
                        i++;
                        var count = $('.' + 'song_value').length;
              //          console.log("the size = " + count);
                    }
                });
                $('head').append('<script type="text/javascript" src="particles.js"></script>');
                $('head').append('<script type="text/javascript" src="app.js"></script>');
            });

        }
        return(
            <nav className = "queue">
                <div id="content">
                    <ol id="song_list">
                    </ol>
                    <div id="particles-js"></div>
                </div>
            </nav>
        );
    }
}