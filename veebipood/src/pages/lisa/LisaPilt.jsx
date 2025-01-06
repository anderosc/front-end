import { useRef } from 'react'
import PildidJSON from '../../data/pildid.json'


function LisaPilt() {
    const piltRef = useRef()
    const lisa = () => {
        PildidJSON.push(piltRef.current.value)
    }

  return (
    <div>
    <label> Pilt </label> <br />
    <input ref={piltRef} type="text" /> <br />
    <button onClick={lisa}> Lisa </button> <br />
    
</div>
  )
}

export default LisaPilt