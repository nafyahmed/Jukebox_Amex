import React from "react";
import * as firebase from 'firebase';

export class Header extends React.Component {


    logout() {
  //      console.log("test");
        firebase.auth().signOut();
        location.reload();
    }

    render()
    {
        return (
            <nav className="navbar navbar=default">
                <div className="container">
                    <div className="row">
                        <button id="btnLogout" onClick={this.logout.bind(this)}  className="btn btn-outline-primary">Logout</button>
                    </div>
                </div>
            </nav>
        );
    }

}