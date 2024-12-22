import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
 <div className="sidebarItem"> 
    <span className="sidebarTitle"> ABOUT ME </span>
    <img className="sidebarImg" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.  This is some  random text. 
     </p>

        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle"> CATEGORIES</span>
            <ul className="sidebarList"> 
                <li className="sidebarListItem"> Life </li>
                <li className="sidebarListItem"> Music </li>
                <li className="sidebarListItem"> Style </li>
                <li className="sidebarListItem"> Sport </li>
                <li className="sidebarListItem"> Tech </li>
            </ul>

        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle"> FOLLOW US</span>
        <div className="sidebarSocial">
        <i class="sidebarIcon fa-brands fa-facebook"></i>
      <i class="sidebarIcon fa-brands fa-twitter"></i>
      <i class="sidebarIcon fa-brands fa-instagram"></i>

        </div>



        </div>
    </div>
  )
}
