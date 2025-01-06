import { useState } from "react"
import { Link } from "react-router-dom"


function NavigationBar() {
    const [count, setCount] = useState(0)  //algväärtus
  return (
    <div>
          <Link to="/ostukorv" >
    <img className= 'pilt' src="https://cuadriciclos.es/wp-content/uploads/2023/07/Nobe-100-1-1-1024x576.jpg" alt="" />
    </Link>

    
    <button onClick={() => setCount(count +1)}> Vajuta mind {count} </button>

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

    <Link to="/halda-esindused">
    <button className = 'nupp' > Halda Esindused </button>
    </Link>

    <Link to="/halda-hindu">
    <button className = 'nupp' > Halda Hinnad </button>
    </Link>

    <Link to="/halda-pildid">
    <button className = 'nupp' > HaldaPildid </button>
    </Link>

    <Link to="/halda-tootajad">
    <button className = 'nupp' > Hald Tootajad </button>
    </Link>

    <Link to="/Halda-tooted">
    <button className = 'nupp' > Halda Tooted </button>
    </Link>

    <Link to="/lisa-esindus">
    <button className = 'nupp' > Lisa Esindus </button>
    </Link>

    <Link to="/lisa-hind">
    <button className = 'nupp' > Lisa Hind </button>
    </Link>

    <Link to="/lisa-pilt">
    <button className = 'nupp' > Lisa pILT </button>
    </Link>

    <Link to="/lisa-toode">
    <button className = 'nupp' > Lisa Toode </button>
    </Link>

    <Link to="/lisa-tootaja">
    <button className = 'nupp' > Lisa Tootaja </button>
    </Link>







    </div>
  )
}

export default NavigationBar