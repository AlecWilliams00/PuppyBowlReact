import { useState } from "react"

export default function newPlayerForm(){
    const [playername, setPlayername] = useState("")
    const [breed, setBreed] = useState("")
    const [status, setStatus]= useState("") 
    const [img, setImg] = useState("")

    async function handleSubmit(event){
        event.preventDefault()
        try{
            const response = await fetch(
                "https://fsa-puppy-bowl.herokuapp.com/api/2305-FTB-ET-WEB-PT/players",{               
                    method: 'POST',
                    headers:{
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: playername,
                    breed: breed,
                    status: status,
                    img: img
                })
              })  
            const result = await response.json();
            console.log(result)
        }catch (err){
            console.err(err)
        }
    }
    return(
        <>
        <form onSubmit = {handleSubmit}>
            <label>Player Name</label>
            <input value={playername} onChange={(event)=>setPlayername(event.target.value)}></input>
            <br></br>
            <label>Breed</label>
            <input value={breed} onChange={(event)=>setBreed(event.target.value)}></input>
            <br></br>
            <label htmlFor ="playerStatus">Status</label>
            <select id= "playerStatus" name= "status" value={status} onChange={(event)=>setStatus(event.target.value)}>
                <option value = "field">field</option>
                <option value = "bench">bench</option>
            </select>
            <br></br>
            <label >Player Image</label>
            <input value={img} onChange={(event)=>setImg(event.target.value)}></input>
            <br></br>
            <button>Submit</button>
        </form>
        </>
    )
}

                