import { useState } from 'react'

function Tagasiside() {
    const [tagasisided, setTagasisided] = useState (["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
  return (
    <div>Tagasiside:
    {tagasisided.map(element => <div key={element}> {element} </div>)} 
    </div>
  )
}

export default Tagasiside