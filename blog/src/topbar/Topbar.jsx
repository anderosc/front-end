import './topbar.css'

function Topbar() {
  return (
    <div className="top">
        
        <div className='topLeft' > 
        <i className="topIcon fa-brands fa-facebook" /> 
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>

        <div className='topCenter' > 
            <ul className='topList'>
                <li className='topListItem'>HOME </li>
                <li className='topListItem'>ABOUT </li>
                <li className='topListItem'>CONTACT </li>
                <li className='topListItem'>LOG OUT </li>
                </ul>
        </div>
        <div className='topRight' > 
            <img className='topImg' src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?t=st=1734990337~exp=1734993937~hmac=94610140e4385a1d249b34836c8280752d9f1f8759ebb1c248a20f2b844945a3&w=900" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        
    </div>
  )
}

export default Topbar