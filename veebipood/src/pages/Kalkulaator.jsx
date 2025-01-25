import {  useState } from 'react'
import Tavakalkulaator from '../components/Tavakalkulaator'
import LaenuKalkulaator from '../components/LaenuKalkulaator'
import MaksimaalneKalkulaator from '../components/MaksimaalneKalkulaator'

function Kalkulaator() {
  const[vaade, setVaade] = useState("tava")
    
  return (
    <div>
      <button onClick={() => setVaade("tava")}>  Tavakalkulaator </button>
      <button onClick={() => setVaade("laenu")}>  Laenukalkulaator </button>
      <button onClick={() => setVaade("maksimaalne")}>  Maksimaalne limiit </button>

        {vaade === "tava" && <Tavakalkulaator />}
        <br />
        {vaade === "laenu" &&  <LaenuKalkulaator /> }
        {vaade === "maksimaalne" &&  < MaksimaalneKalkulaator /> }
    </div>
  )
}

export default Kalkulaator
