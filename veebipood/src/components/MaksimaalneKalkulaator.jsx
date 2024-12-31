import { useRef, useState } from "react"


function MaksimaalneKalkulaator() {
    const ylalpeetavadRef = useRef()
    const sissetulekRef = useRef()
    const kohustusedRef = useRef()

    const [summa, setSumma]= useState(0)
    const arvutaSummaKokku = () => {
        setSumma((sissetulekRef.current.value - kohustusedRef.current.value) / 
       ( ylalpeetavadRef.current.value / 10 )) * 10000

    }
  return (
    <div>
        <label htmlFor=""> Ülalpeetavad</label>
        <input onChange={arvutaSummaKokku} ref={ylalpeetavadRef} type="number" /> <br />
        <label htmlFor=""> Sissetulek</label>
        <input onChange={arvutaSummaKokku}  ref={sissetulekRef} type="number" /> <br />
        <label htmlFor=""> Kohustused </label>
        <input onChange={arvutaSummaKokku}  ref={kohustusedRef} type="number" /> <b></b>
        <div> {summa.toFixed(2)} </div>
    </div>
  )
}

export default MaksimaalneKalkulaator