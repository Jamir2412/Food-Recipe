import { useState } from 'react'
import Search from './components/Search'
import DisplayRecipe from './components/DisplayRecipe';
import "./styles/app.module.css"
import Navbar from './components/Navbar';
function App() {
  //other state to store info about recipe so that 
  //we can use that info into other components as well
  const [recipe, setRecipe]= useState([]);
  return (
    <div className="App">
      <Navbar/>
      <Search recipe={recipe} setRecipe={setRecipe}/>
      <DisplayRecipe recipe={recipe} setRecipe={setRecipe}/>
    </div>
  )
}

export default App
