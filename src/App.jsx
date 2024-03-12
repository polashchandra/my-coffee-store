import { useState } from 'react'

import './App.css'
import { useLoaderData } from 'react-router-dom'

function App() {

const coffees=useLoaderData()
  return (
    <div>
      <h1>how to stach coffe{coffees.length}</h1>
    </div>
  )
}

export default App
