import React from "react";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div id = "navBar">
            <Link to= 'NewPlayerForm'>New Player Form</Link>
            <br></br>
            <Link to = '/AllPlayers'>All Players</Link>
            <br></br>
            <Link to = '/players/:id'>Single Id</Link>
        </div>
    )
}
