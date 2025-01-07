import { useRef } from 'react'
import hinnadData from '../../data/hinnad.json'


function LisaHind() {
    const hindRef = useRef()
    const lisa = () => {
        hinnadData.push(hindRef.current.value);
        hindRef.current.value = "";
    }

  return (
    <div>
    <label> Hind </label> <br />
    <input ref={hindRef} type="number" /> <br />
    <button onClick={lisa}> Lisa </button> <br />
    
</div>
  )
}

export default LisaHind