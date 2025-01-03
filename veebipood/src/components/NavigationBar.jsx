import { useState } from "react"
import { Link } from "react-router-dom"


function NavigationBar() {
    const [count, setCount] = useState(0)  //algväärtus
  return (
    <div>
          <Link to="/ostukorv" >
    <img className= 'pilt' src="https://cuadriciclos.es/wp-content/uploads/2023/07/Nobe-100-1-1-1024x576.jpg" alt="" />
    </Link>

    

    <Link to="/Ostukorv">
    <button className = 'nupp' > Ostukorv </button>
    </Link>

    <Link to="/osta-kinkekaart">
    <button className = 'nupp' > Kinkekaart </button>
    </Link>

    <Link to="/Seaded">
    <button className = 'nupp' > Seade </button>
    </Link>


    <Link to="/lisa-toode">
    <button className = 'nupp' > Lisatoode </button>
    </Link>

    <Link to="/kalkulaator">
    <button className = 'nupp' > Kalkulaator </button>
    </Link>

    <br />
    <br />

    <Link to="/esindused">
    <button className = 'nupp' > Esindused </button>
    </Link>

    <Link to="/hinnad">
    <button className = 'nupp' > Hinnad </button>
    </Link>

    <Link to="/pildid">
    <button className = 'nupp' > Pildid </button>
    </Link>

    <Link to="/tootajad">
    <button className = 'nupp' > Tootajad </button>
    </Link>

    <Link to="/tooted">
    <button className = 'nupp' > Tooted </button>
    </Link>






    <button onClick={() => setCount(count +1)}> Vajuta mind {count} </button>

    </div>
  )
}

export default NavigationBar