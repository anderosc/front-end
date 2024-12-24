import './sidebar.css'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className='sidebarImg' src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex placeat perferendis assumenda, aperiam incidunt ea nemo.</p>
        </div>
        <div className="sidebarItem"> 
            <span className="sidebarTitle" > CATEGORIES </span>
            <ul className='sidebarList'> 
                <li className="sidebarListItem"> Life</li>
                <li className="sidebarListItem"> Music</li>
                <li className="sidebarListItem"> Style</li>
                <li className="sidebarListItem"> Tech</li>
                <li className="sidebarListItem"> Sport</li>


            </ul>
        </div>
        <div className="sidebarItem"> 
            <span className='sidebarItem'> FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook" /> 
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>

            </div>
        </div>
    </div>
  )
}
