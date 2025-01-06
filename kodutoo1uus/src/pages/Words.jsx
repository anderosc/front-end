import  { useState } from 'react'

function Words() {
    const [words, setWords] = useState(['spray', 'elite', 'exuberant', 'destruction', 'present']);

  return (
    <div>
        <button onClick={() => setWords([])}>CLEAR</button>
        <br />
        <div> Amount: {words.length} </div>
        <br />
        <div>Months: </div>
        {words.map(word => <div key={word}> {word} </div>)}
       {words.length === 0 && <div> DONE!!!!!!!!!!!! </div> }

    </div>
  )
}

export default Words