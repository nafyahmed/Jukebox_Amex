import React from "react";
import {Song} from './Song';
import {Queue} from './Queue';
import Audio from 'react-audioplayer';
import * as firebase from 'firebase';

export class Jukebox extends React.Component {

    queue_of_songs = [];
    currentVal = 0;
    songPlayerPos = 0;


    constructor(props){
        super();
        this.state = {

        };
    }

    load(){
        firebase.auth().onAuthStateChanged(function(user) {
            const userRef =  firebase.database().ref().child('users');
            if (user) {
                // User is signed in.
                var user1 = firebase.auth().currentUser;
             //   console.log("THE user = " + user1.uid);
                const user = userRef.child(user1.uid);
         //       console.log("user1.uid = " + user1.uid);
                const songQueue = user.child('song_queue');

                //getting number of songs
                songQueue.on("value", function(snapshot){
            //        console.log("There are "+snapshot.numChildren()+" songs currently");
                });

                songQueue.once('value').then(snapshot => {
                    const updates = {};
                    snapshot.forEach(function(child) {
                    });
                });
                } else {
                // No user is signed in.
            }
        });
    }

    addSong(song){
        firebase.auth().onAuthStateChanged(function(user) {
            const userRef =  firebase.database().ref().child('users');
            if (user) {
                // User is signed in.
                var user1 = firebase.auth().currentUser;
            //    console.log("THE user = " + user1.uid);
                const user = userRef.child(user1.uid);
                const songQueue = user.child('song_queue');
           //     console.log("Loaded Successfully");
                songQueue.push(song);
             //   console.log("song = " + song);
            } else {
                // No user is signed in.
            }
        });
    }
/*    onChangeLinkName(newName){
    }*/
    render() {
        {/* Establish number of songs */}
        var songs = [];
        {/* Get function to retrieve songs from back end */}

        {/*For loop to store the songs into the initialized variable, and list the song inside a list */}
        {/*        for (var i = 0; i < 6; i++) {
            songs.push(<li key={i} ><Song song_name={"one"} song_genre={"two"} song_artist={"three"} greet={this.onGreet} /></li>);
        }*/}
        {this.load()};

     //   console.log("hey hey hey = " + this.props.user);

        songs.push(<li key={"1"}><Song song_name={"7 Years"} song_genre={"Pop"} song_artist={"Lukas Graham"}></Song><img src="/img/lukas.jpg" height="100px" width="100px"></img>
            <p></p>
            <button onClick={() => this.addSong("7 Years")} className = "btn btn-outline-primary" id="song1"> Add Song</button>
            </li>);
        songs.push(<li key={"2"}><Song song_name={"Best of You"} song_genre={"Rock"} song_artist={"Foo Fighters"}></Song><img src="/img/foo_fighters.jpg" height="50px" width="50px"></img>
            <p></p>
            <button onClick={() => this.addSong("Best of You")} className = "btn btn-outline-primary" id="song2"> Add Song</button>
        </li>);
        songs.push(<li key={"3"}><Song song_name={"Accidentally in Love"} song_genre={"Rock"} song_artist={"Counting Crows"}></Song><img src="/img/counting_crows.jpg" height="50px" width="50px"></img>
            <p></p>
            <button onClick={() => this.addSong("Accidentally in Love")} className = "btn btn-outline-primary" id="song3"> Add Song</button>

        </li>);
        songs.push(<li key={"4"}><Song song_name={"All Star"} song_genre={"Rock"} song_artist={"Smashmouth"}></Song><img src="/img/smash_mouth.jpg" height="50px" width="50px"></img>
            <p></p>
            <button onClick={() => this.addSong("All Star")} className = "btn btn-outline-primary" id="song4"> Add Song</button>

        </li>);
        songs.push(<li key={"5"}><Song song_name={"Believe"} song_genre={"Alternative"} song_artist={"The Bravery"}></Song><img src="/img/bravery.jpg" height="50px" width="50px"></img>
            <p></p>
            <button onClick={() => this.addSong("Believe")} className = "btn btn-outline-primary" id="song5"> Add Song</button>
        </li>);
        songs.push(<li key={"6"}><Song song_name={"Gives you Hell"} song_genre={"Alternative"} song_artist={"All American Rejects"}></Song><img src="/img/all_american_rejects.jpg" height="50px" width="50px"></img>
            <p></p>
            <button onClick={() => this.addSong("Gives you Hell")} className = "btn btn-outline-primary" id="song6" > Add Song</button>
        </li>);

        return(
            <nav className = "jukebox">
                <div className="jukebox_container">
                    <ul id="theSongs">
                    {songs}
                    </ul>
                </div>
            </nav>
        );
    }
}