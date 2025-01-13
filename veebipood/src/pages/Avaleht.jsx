//rfc
import { useState } from 'react'

//
export default function Avaleht() {
  const [kogus, setKogus] = useState(1);
  const [sonum, setSonum] = useState("Uueda kogust");
  const [laigitud, setLaigitud] = useState(false);

  function nulli() {
    setKogus(0);
    setSonum("Kogus on nullitud")

  }

  function vahenda(){
setKogus(kogus-1);
setSonum("Kogus vähendatud")
  }

  function suurenda() {
    setKogus(kogus+1);
    setSonum("Kogus suurendatud")

  }

  


  return (
    <div>

      {laigitud === true && <img src="/laigitud.svg" alt="" />}
     { laigitud === false && <img src="/mitte-laigitud.svg" alt="" />}
     <button onClick={() => setLaigitud(!laigitud)}> Muuda likei</button>
      <div>{sonum}</div>
      
      <br />
      {kogus > 0 && <button onClick={nulli}>Nulli kogus</button> }
      <br />
      <button disabled={kogus === 1} onClick={vahenda}>-</button>
      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

// Värvused
// tumesinine - määratlus. function, const, let, div, button
// tavaline sinine - muutuja, mille ise loon
// helesinine - HTMLi atribuut: src, alt, className, onClick
//              JS: võtmed (.current.value), impordid, JS sissekirjutatud muutujad (console)
// kollane - funktsioonid --> sulud lõpus
// tumeroheline - kommentaar
// oranž - string/sõna
// heleroheline - number
// valge - igasugused märgid. HTMLi tekst
// roheline suure tähega sõna - sisseimporditud väärtus
// lilla - käsklus: if/else, import/export, return
// sulgude värvus: lilla, sinine, kollane


// Märgid
// = --> väärtuse andmiseks
// === --> vasaku ja parema poole identsuse leidmiseks
// == --> ilma tüübikontrollita identsuse leidmine ("6" == 6)
// !== --> ei ole identsed
// <=  >=   >   <    väiksem/võrdne   suurem/võrdne   suurem  väiksem
// =>      nool     () =>      .filter(el => )
// {} --> HTMLs dünaamilisuse näitamiseks (seal on JavaScript)
//        JavaScript: funktsiooni alustamiseks ja lõpetamiseks
//                    if/else alustamiseks ja lõpetamiseks
//  1. kokkuvõtteks: koodibloki alustamiseks ja lõpetamiseks
//  2. objektide jaoks: andmete sidumiseks {võti: väärtus, võti2, väärtus2}
//  3. useParams sees    const {index} = useParams. võtmine piiramatu
// [] --> array jaoks. useState väljastab array: täpselt 2 kohaline
// () --> kui muutujaid loon tsüklis, noole ees, kahekaupa (a,b) =>  (toode,index) =>
//        funktsionaalsuste tähistamiseks
// ;  --> rea lõpetamiseks - vabatahtlik
// .  --> tema seest mingi funktsionaalsuse tegemine või võtme abil väärtuse küsimine
//          .sort   ,  .filter  ,  .startsWith            .length    .current.value
// && --> kui vasakul on tõde, siis näidatakse
// ? : --> ternary operator   kui küsimärgi ees on tõde, siis näidatakse kooloni ees olevat asja
//                        kui küsimärgi ees pole tõde, siis näidatakse kooloni järel olevat asja

// CSS:
// # --> id
// . --> class
// div --> tagi
// : --> sündmus
// .class1.class2 --> mõlemad klassid peavad korraga peab olema
// .class1 .class2  --> klass 2 peab olema klass 1 sees
// .class1 > .class2 --> klass 2 peab olema vahetult klass 1 sees

// Hookid ---> Reacti erikood, mille taga toimub suurema koodibloki käivitamine
// 1. peab alati importima
// 2. alati sulud lõpus
// 3. alati use eesliides
// 4. ei tohi olla tingimuslikult loodud: ei tohi olla if/else sees või pärast early returni
// 5. peab olema loodud täpselt 1x, ei tohi olla funktsiooni sees loodud või tsüklis loodud