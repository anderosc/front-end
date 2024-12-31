import React, { useRef,useState } from 'react'

function input() {
    const inputistLugeja = useRef ("");
    const [muutuvHTMLs, funktsioonMuutujaMuutmisks] = useState("")

    const onClickFunktsioon = () => {
        funktsioonMuutujaMuutmisks(inputistLugeja.current.value)
    } 
  
    return (
    <div>input
    <br />
    <br />

    <div className='center'>
        <input ref={inputistLugeja} type="text" /> <br />
        <button onClick={onClickFunktsioon}> Muuda</button> <br />
        <div> {muutuvHTMLs} </div>
    </div>


    
    </div>
  )
}

export default input