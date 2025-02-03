import  "./navbar.css"
import logo_light from "../../public/navbar/logo-black.png";
import logo_dark from "../../public/navbar/logo-white.png";
import searchicon_light from "../../public/navbar/search-w.png"
import searchicon_dark from "../../public/navbar/search-b.png"
import toggle_light from "../../public/navbar/day.png"
import toggle_dark from "../../public/navbar/night.png"






function NavBar() {
  return (
    <div className="navbar">NavBar 
       <img src={logo_light} alt=""  className="logo"/>
       <ul>
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
       </ul>

       <div className="searchbox">
        <input type="text"  placeholder="Search"/>
        <img src={searchicon_light} alt="" />
       </div>

       <img className="icon" src={toggle_light} alt="" />
    </div>
  )
}

export default NavBar