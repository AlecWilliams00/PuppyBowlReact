import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar'
import SinglePlayer from './components/SinglePlayer'
import AllPlayers from './components/AllPlayers'
import Newplayerform from './components/NewPlayerForm'
import { BrowserRouter } from 'react-router-dom'



function App() {
  

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path = '/NewPlayerForm' element = {<Newplayerform/>}/>
      <Route path = '/players/:playerId' element = {<SinglePlayer/>}/>
      <Route path = '/AllPlayers' element = {<AllPlayers/>}/>
     </Routes>
    </BrowserRouter>




    
    </>
  )
}

export default App