import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Avaleht</Link>
      <Link to="/add">Lisa arvuti</Link>
      <Link to="/all">Kõik arvutid</Link>
    </nav>
  );
}

export default NavBar;
