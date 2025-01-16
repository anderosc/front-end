import joogidFailist from "../data/joogid.json";
import { Link } from 'react-router-dom';


function Avaleht() {
    return (
        <div>
            <h1>Avaleht</h1>
            <div>
                {joogidFailist.map((jook, index) => (
                    <div key={index}><Link to={"/jook/" + index}>  {jook} </Link></div>
                ))}
            </div>
        </div>
    );
}

export default Avaleht;
