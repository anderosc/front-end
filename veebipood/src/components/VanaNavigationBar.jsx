import { useState } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';


function NavigationBar() {
    const [count, setCount] = useState(0)  //algväärtus
      const { t, i18n } = useTranslation();
    
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("et")}>Eesti keel</button>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>

    <Link to="/apihome">
    <button className = 'nupp' > API-{t("plural")} </button>
    </Link>

          <Link to="/ostukorv" >
    <img className= 'pilt' src="https://cuadriciclos.es/wp-content/uploads/2023/07/Nobe-100-1-1-1024x576.jpg" alt="" />
    </Link>

    <Link to="/login">
    <button className = 'nupp' > Log In </button>
    </Link>

    <Link to="/registeeru">
    <button className = 'nupp' > {t("nav.signup")} </button>
    </Link>
    <br />

    <button onClick={() => setCount(count +1)}> Vajuta mind {count} </button> <br />


    <Link to="/Ostukorv">
    <button className = 'nupp' > {t("nav.cart")} </button>
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

   
    <br /><br />

    









    </div>
  )
}

export default NavigationBar