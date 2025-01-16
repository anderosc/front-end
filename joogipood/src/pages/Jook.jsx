import joogid from "../data/joogid.json"
import { useParams } from 'react-router-dom';


function Jook() {
    const{index} = useParams();
    const leitud = joogid[index];
    return (
    <div>
      {leitud}
    </div>
  )
}

export default Jook