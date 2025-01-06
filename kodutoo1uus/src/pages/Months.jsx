import { useState } from "react";

function Months() {
    const [months, setMonths] = useState (['March', 'Jan', 'Feb', 'Dec']);

      return (
    <div>
        <button onClick={() => setMonths([])}>CLEAR</button>
        <br />
        <div> Amount: {months.length} </div>
        <br />
        <div>Months: </div>
        {months.map(month => <div key={month}> {month} </div>)}
       {months.length === 0 && <div>list is cleard lol </div> }
       {/* Kas oleks saanud paremini? */}
    </div>
  )
}

export default Months