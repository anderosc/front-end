import { useParams } from "react-router-dom"
import EsindusedFailist from "../../data/esindused.json"


function YksEsndus() {
    const {index} = useParams();
    const esindus = EsindusedFailist[index]; // undefined - tyhjus kui ei leita
    
    if (esindus === undefined){
        return <div> Esindust ei leitud</div>
    }
    

  return (
    <div>
        <div>{esindus}</div>
    </div>
  )
}

export default YksEsndus