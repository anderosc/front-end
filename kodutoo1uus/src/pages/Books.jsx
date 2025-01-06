import { useState } from 'react'

function Books() {
    const [books, setBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Harry PotteCr", "The Alchemist"]);

    const sorteeriEsimeneT2htAZ = () => {
      const vastus = books.toSorted((a,b)=> a.localeCompare(b))
      setBooks(vastus)
    }
    const sorteeriEsimeneT2htZA = () => {
      const vastus = books.toSorted((a,b)=> b.localeCompare(a))
      setBooks(vastus)
    }
    const sorteeriSonapikkus = () => {
      const vastus = books.toSorted((a,b) => a.length - b.length)
      setBooks(vastus)
    }
// HOW???????????????????????????????????????????????????????????????????????????????????????????????????????????
    // const sorteeriSonadeArv = () => {
    //   for (let i = 0; i < books.length; i++) {
    //     const arv = +arv
        
    //   }
    //   const vastus = books.toSorted((a,b) => a.arv - b.arv)
    //   setBooks(vastus)
    // }
  //  ????????????????????????????????????????????????????????????????????????????????????
  
  const sorteeriSonadeArv = () => {
    const vastus = [...books].sort((a, b) => a.split(' ').length - b.split(' ').length);
    setBooks(vastus);
}
  
  const sorteeriEelviimaneT2ht = () => {
      const vastus = books.toSorted((a, b) => a[a.length - 2].localeCompare(b[b.length - 2]));
      setBooks(vastus);
    }


    ///FILTREERI
    const FiltreeriThegaAlgavad = () => {
      const vastus = books.filter(book => book.startsWith("The"));
      setBooks(vastus);
    }
    
    const filtreeriAnd = () => {
      const vastus = books.filter(book => book.includes("And"));
      setBooks(vastus);
    }
        const filtreeriYleKymneT2hem2rgi = () => {
      const vastus = books.filter(book => book.length > 10);
      setBooks(vastus);
    }
    
    const filtreeriV2hemKuiSeitseT2hem2rki = () => {
      const vastus = books.filter(book => book.length < 7);
      setBooks(vastus);
    }
    const filtreeriEelviimaneT2htC = () => {
      const vastus = books.filter(book => book[book.length - 2] === "c");
      setBooks(vastus);
    }

    
  return (
    <div>
        <br />
        <br />
       <div>Näita Hamlet sõna pikkust: {books[2] ? books[2].length : "NA"}</div>
       <br />

        <div>SORT:</div>
        <button onClick={sorteeriEsimeneT2htAZ}> Esimene täht A-Z </button>
        <button onClick={sorteeriEsimeneT2htZA}> Esimene täht Z-A </button>
        <button onClick={sorteeriSonapikkus}> Sõnapikkuse järgi </button>
        <button onClick={sorteeriSonadeArv}> Sõnade arv </button>
        <button onClick={sorteeriEelviimaneT2ht}> Eelviimane täht  </button>
        <div>FILTER:</div>
        <button onClick={FiltreeriThegaAlgavad}> Thega algavad  </button>
        <button onClick={filtreeriAnd}> Keskl And </button>
        <button onClick={filtreeriYleKymneT2hem2rgi}> Üle 10 tähemärgi </button>
        <button onClick={filtreeriV2hemKuiSeitseT2hem2rki}> Vähem kui 7 tähemärki </button>
        <button onClick={filtreeriEelviimaneT2htC}> Eelviimane täht c</button>


        <br />

        <div>Very Nice Books:</div>
        <br />

    {books.map(book => <div key={book}> {book} </div>)}
    </div>
  )
}

export default Books