import React, { useState, useEffect } from 'react';

const URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-ET-WEB-PT/players';

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);

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

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>All Players</h2>
            
                {players.map(player => (
                <ul key={player.id} >
                    <li>{player.name}</li>
                    <li>{player.breed}</li>
                    <li>{player.status}</li>
                    {/* <li key={player.id}>{player.image}</li> */}



                </ul>     
                ))}
           
        </div>
    );
}