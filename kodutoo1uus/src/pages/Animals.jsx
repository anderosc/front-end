import  { useState } from 'react'

function Animals() {
    const [animals, setAnimals] = useState (['pigs', 'goats', 'sheep']);
  return (
    <div>
    <button onClick={() => setAnimals([])}>CLEAR</button>
    <br />
    <div> Amount: {animals.length} </div>
    <br />
    <div>Months: </div>
    {animals.map(animal => <div key={animal}> {animal} </div>)}
   {animals.length === 0 && <div>CLEARED! </div> }

</div>
  )
}

export default Animals