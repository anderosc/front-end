import kasutajadFailist from "../../data/kasutajad.json"

function HaldaKasutajad() {
  const kasutajad = kasutajadFailist;

  return (
    <div>
      {kasutajad.map(kasutaja =>
        <div key={kasutaja.email}>
          <div>{kasutaja.email}</div>
          <div>{kasutaja.nimi}</div>
          <br />
          {/* {JSON.stringify(kasutaja)} Objekte ei saa tervikuna välja näidata - leht on valge ja console on error:
          Objects are not valid as a React child (found: object with keys {email, parool, nimi}) */}
        </div> 
      )}
    </div>
  )
}

export default HaldaKasutajad