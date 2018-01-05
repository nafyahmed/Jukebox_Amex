import React from "react";
import PropTypes from 'prop-types';
import {Queue} from './Queue';


export class Song extends React.Component {
    //constructor prop

    queue_of_songs = [];

    constructor(props){
        super();
        this.state = {
            song_name: props.song_name,
            song_added: props.song_added
        };
    }

    //function
/*
    addSong(){
        if(!this.state.song_added) {
            this.setState({
                song_name: "Added " + this.state.song_name

            });
            console.log(this.song_name);
            this.setState({
                song_added: true
            });


            //add song into the queue
            this.queue_of_songs.push(this.props);
            console.log(this.queue_of_songs);

            //update queue view
            document.getElementsByClassName('queue')[0].innerHTML += this.state.song_name + '<br>';

            //update song image view

        }
    }
*/

    render(){
        //passing property (the prop is passed into this specific component
  //      console.log(this.props);
        return(
            <div>
                <p className="songName"> {this.state.song_name}</p>
{/*
                <button onClick={() => this.addSong()} className = "btn btn-primary"> Add Song</button>
*/}
                {  /*    <button onClick={this.props.greet} >Greet</button> */}

            </div>

        );
    }
}
//prop types is a concept that allows us to validate props, to tell this component what type of prop we are expecting
Song.propTypes = {
    song_name: PropTypes.string,
    song_genre: PropTypes.string,
    song_artist: PropTypes.string,
    song_added: PropTypes.bool,
    greet: PropTypes.func
}﻿;