import  { useState } from 'react'

function Kontakt() {

  const [aadress, määraAadress] = useState ("Tallinn");
  const [telefon, määraTelefon] = useState ("54 54 10 10");
  const [email, määraEmail] = useState ("bla@bla.com ");
  const [ingliseKeelne, määraIngliseKeelne] = useState ("ei");

  const ingliseks = () =>  {
    määraAadress("Lodon")
    määraTelefon("54 55 40 40")
    määraEmail("blahhhh@gmallll.com")
    määraIngliseKeelne("jah")
    }


  return (
    <> 
    <div>{aadress}</div>
    <div>{telefon}</div>
    <div> {email} </div>

    <button onClick={ingliseks}> Muudai inglis keelde </button>
    { ingliseKeelne === "jah" && <div> Leht on inglise keelne</div>}
    </>
  )
}

export default Kontakt