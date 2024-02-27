import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2311-FTB-ET-WEB-PT/players';


export default function SinglePlayer(){
    const {playerId} = useParams();
    const [player, setPlayer] = useState(null);


    useEffect(() =>{
        const fetchPlayer = async () =>{
            try{
                const response = await fetch (`${URL}/${playerId}`);
                if (!response.ok){
                    throw new Error('Failed to fetch player')
                }
                const result = await response.json();
                setPlayer(result.data.player);
            }catch(error){  
                console.error(error);
            }
        };

        fetchPlayer()
    }, [playerId])

    return (
        <>
            <div>
                <h2>Player Details</h2>
                {player && (
                    <ul>
                        <li>Name: {player.name}</li>
                        <li>Breed: {player.breed}</li>
                        <li>Status: {player.status}</li>
                        <li><img src={player.imageUrl} alt={player.name}></img></li>
                    </ul>
                )}
            </div>
        </>
    )



}