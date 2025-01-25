import  { useRef, useState } from 'react'

function LaenuKalkulaator() {
    const [laenusumma, setLaenusumma] = useState(75000); //USE state et panna htmlis mingi koht muutuma
        const laenusummaRef = useRef();
        
        
        function arvuta() {
            setLaenusumma(laenusummaRef.current.value * 2.637);
    
        }
  return (
    <div>
         <label > laenusumma </label>
        <input defaultValue={75000} onChange ={arvuta} ref={laenusummaRef} type="text" />
      
       { laenusumma >= 20000 && laenusumma <= 10000000 ?
         <div>{(laenusumma / 30 /12 ).toFixed(2)} $kuus</div>:
       <div > Laenusumma võib olla vahemikus 20k - 10mil </div>}

    </div>
  )
}

export default LaenuKalkulaator
