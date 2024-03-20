

import './App.css'
import { useLoaderData } from 'react-router-dom'
import Coffee from './component/Coffee.jsx'


function App() {

const coffees=useLoaderData()
  return (
    <div>
      <h1>how to stach coffe{coffees.length}</h1>
       {
        coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
       }
    </div>
  )
}

export default App
