import React from "react";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div id = "navBar">
            <Link to= 'NewPlayerForm'>New Player Form</Link>
            <Link to = '/all-players'>All Players</Link>
            <Link to = '/players/:id'>Single Id</Link>
        </div>
    )
}
