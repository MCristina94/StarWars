import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Page/Home'
import Contact from './Page/Contact'
function App() {

  return (
    <>
      <h1>STAR WARS</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
       
      </Routes>
    </>
  )
}

export default App
