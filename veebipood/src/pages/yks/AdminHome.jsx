import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom'

function AdminHome() {
  return (
    <div>
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
    <Button variant="secondary" > Lisa Hind </Button>
    </Link>

    <Link to="/lisa-pilt">
    <button className = 'nupp' > Lisa pilt </button>
    </Link>

    <Link to="/lisa-tootaja">
    <button className = 'nupp' > Lisa Töötaja </button>
    </Link>

    <Link to="/lisa-toode">
    <Button variant="primary">Lisa toode</Button>

    </Link>
    <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
    </div>
  )
}

export default AdminHome