import { useRef } from 'react'
import PildidJSON from '../../data/hinnad.json'


function LisaHind() {
    const hindRef = useRef()
    const lisa = () => {
        PildidJSON.push(piltRef.current.value)
    }

  return (
    <div>
    <label> Pilt </label> <br />
    <input ref={hindRef} type="number" /> <br />
    <button onClick={lisa}> Lisa </button> <br />
    
</div>
  )
}

export default LisaHind