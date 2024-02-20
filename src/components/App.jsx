// in the db.json change name to owner in the future
import TruckContainer from "./TruckContainer"
import TruckForm from "./TruckForm"
import { useState, useEffect } from "react"

function App() {

  const [ lightmode, setLightMode ] = useState( false )
  const [ trucks , setTrucks] = useState( [] )

  const coolString = "I am something cool"

  function handleLightModeClick() {
    console.log("I AM WORKING")
    setLightMode(!lightmode)
  }

  useEffect( () => {
    console.log("I MA A USEFFECT AND I AM FIRING")
    fetch("http://localhost:5555/trucks")
    .then(res => {
      if (res.ok) {
        return res.json()
      } else{
        throw new Error("Unable to fetch data")
      }
      })
    .then(data => setTrucks(data))
    .catch(err => alert(err))
}, [])
  

  return (
    <div className="App">

      <button onClick={handleLightModeClick}>{ lightmode ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>

      <h1>React Refresher</h1>

      <h2>Welcome Back Coders!</h2>

      <TruckContainer trucks = { trucks } />

      <TruckForm setTrucks = {setTrucks} trucks = {trucks}/>

    </div>
  );
}

export default App;
