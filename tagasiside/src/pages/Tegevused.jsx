import { useState } from "react"
import tegevusedData from "../tegevused.json"

function Tegevused() {
    const tegevused = useState(tegevusedData);
  return (
    <div>
        {tegevused.map(tegevus =>
            <div key={tegevus}>
            <div>{tegevus.userId}</div>
            <div>{tegevus.id}</div>
            <div>{tegevus.title}</div>
            <div>{tegevus.completed}</div>
            <br />
            </div>
        )}
    </div>
  )
}

export default Tegevused