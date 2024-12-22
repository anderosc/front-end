import "./topbar.css"

export default function TopBar() {
  return (

    // Ignore the errors from lines 8-10
    <div className="top">
      <i class="topIcon fa-brands fa-facebook"></i>
      <i class="topIcon fa-brands fa-twitter"></i>
      <i class="topIcon fa-brands fa-instagram"></i>
        <div className= "TopLeft" >   </div>
 
        <div className= "TopCenter" >  </div>
        <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>
        </ul>



        <div className= "TopRight" >   </div>
        
        <img className="topImg" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
  )
}
