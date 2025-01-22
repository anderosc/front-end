import { useState } from "react"
import { Link } from "react-router-dom"


function NavigationBar() {
    const [count, setCount] = useState(0)  //algväärtus
  return (
    <div>
          <Link to="/ostukorv" >
    <img className= 'pilt' src="https://cuadriciclos.es/wp-content/uploads/2023/07/Nobe-100-1-1-1024x576.jpg" alt="" />
    </Link>

    <Link to="/login">
    <button className = 'nupp' > Log In </button>
    </Link>

    <Link to="/registeeru">
    <button className = 'nupp' > Registeeru </button>
    </Link>
    <br />

    <button onClick={() => setCount(count +1)}> Vajuta mind {count} </button> <br />


    <Link to="/Ostukorv">
    <button className = 'nupp' > Ostukorv </button>
    </Link>

    <Link to="/osta-kinkekaart">
    <button className = 'nupp' > Kinkekaart </button>
    </Link>

    <Link to="/Seaded">
    <button className = 'nupp' > Seaded </button>
    </Link>


    <Link to="/lisa-toode">
    <button className = 'nupp' > Lisa toode </button>
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
    <button className = 'nupp' > Töötajad </button>
    </Link>

    <Link to="/tooted">
    <button className = 'nupp' > Tooted </button>
    </Link>

    <br /><br />

    <Link to="/halda-esindused">
    <button className = 'nupp' > Halda Esindused </button>
    </Link>

    <Link to="/halda-hinnad">
    <button className = 'nupp' > Halda Hinnad </button>
    </Link>

    <Link to="/halda-pildid">
    <button className = 'nupp' > HaldaPildid </button>
    </Link>

    <Link to="/halda-tootajad">
    <button className = 'nupp' > Hald Töötajad </button>
    </Link>

    <Link to="/halda-tooted">
    <button className = 'nupp' > Halda Tooted </button>
    </Link>

    <Link to="/halda-kasutajad">
    <button className = 'nupp' > Halda Kasutajad </button>
    </Link>

    <br /><br />

    <Link to="/lisa-esindus">
    <button className = 'nupp' > Lisa Esindus </button>
    </Link>

    <Link to="/lisa-hind">
    <button className = 'nupp' > Lisa Hind </button>
    </Link>

    <Link to="/lisa-pilt">
    <button className = 'nupp' > Lisa pilt </button>
    </Link>

    <Link to="/lisa-tootaja">
    <button className = 'nupp' > Lisa Töötaja </button>
    </Link>

    <Link to="/lisa-toode">
    <button className = 'nupp' > Lisa Toode </button>
    </Link>









    </div>
  )
}

export default NavigationBar