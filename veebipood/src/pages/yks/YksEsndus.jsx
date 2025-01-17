import { useParams } from "react-router-dom"
import EsindusedFailist from "../../data/esindused.json"


function YksEsndus() {
    const {nimi} = useParams();
    // const esindus = EsindusedFailist[index]; // undefined - tyhjus kui ei leita
    const esindus = EsindusedFailist.find(e => e.nimi === nimi);
    
    if (esindus === undefined){
        return <div> Esindust ei leitud</div>
    }
    

  return (
    <div>
        <div>Nimi: {esindus.nimi}</div>
        <div>Tel: {esindus.tel}</div>
        <div>Aadress: {esindus.aadress}</div>

    </div>
  )
}

export default YksEsndus