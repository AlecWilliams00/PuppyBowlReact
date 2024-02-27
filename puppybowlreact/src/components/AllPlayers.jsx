import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-ET-WEB-PT/players';

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchPlayer, setSearch] = useState('')

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Failed to retrieve all');
                }
                const data = await response.json();
                setPlayers(data.data.players);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchPlayers();
    }, []);

    const handeSearchInputChange = (e)=>{
        setSearch(e.target.value);
    }
    const handleDeletePlayer = async (playerId) => {
        try {
             await fetch(URL+'/'+playerId, {
                method: "DELETE",
            });
            setPlayers(players.filter(player => player.id !== playerId));
        } catch (err) {
            console.error(
                'Whoops, trouble removing player #${playerId} from the roster!',
                err
            );
        }
    };
    
    const filterPlayers = players.filter(player =>{
        return player.name.toLowerCase().includes(searchPlayer.toLowerCase());
    });

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>All Players</h2>
            <input id ="searchbar"
                type ='text'
                placeholder='search player name'
                value = {searchPlayer}
                onChange={handeSearchInputChange}
            />

                {filterPlayers.map(player => (
                <ul key={player.id} >
                    <li>{player.name}</li>
                    <li>{player.breed}</li>
                    <li>{player.status}</li>
                    <li><img src= {player.imageUrl} alt = {player.name}/> </li>
                    <Link to= {`/players/${player.id}`}>
                        <button>See Details</button>
                        <button onClick={()=>handleDeletePlayer(player.id)}>Delete</button>
                    </Link>
                    


                </ul>
            
                
                ))}
           
        </div>
    );
}