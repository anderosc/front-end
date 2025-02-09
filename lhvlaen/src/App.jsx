
import { useState } from 'react'
import './App.css'

function App() {
  const [array, setArray] = useState(2);
  const [items, setItems] = useState ([
    {"object" : "diivan", "price" : 330},
    {"object" : "arvuti", "price" : 215}])
  const [sum, setSum] = useState(545)
  
  function sumAll() {
    const updatedItems = [...items];
    // Recalculate the sum based on the current items array
    let total = 0;
    updatedItems.forEach(item => total += item.price);
    setSum(total); // Update the sum
  }


  return (
    <div className="body">
      <div className='upperbox'>
        <div className='greenbox'>
          <div className='greenbox_text'>
            <h4 >Kas sinu diivan on oma aja ära elanud?</h4>
            <p>Oled väsinud segadusest, kus asjadel pole oma kohta. Oled unistanud lausa täiesti
              uuest sisekujundusest, aga kõik tundub korraga liiga kallis? LHV sisustuslaenuga saad
              oma unistused ellu viia juba täna.
            </p>
          <p>Loe lisa</p>
          </div>
          
        </div>
        <img className='picture' src="https://as2.ftcdn.net/v2/jpg/09/68/15/29/1000_F_968152990_ru2R7BcThikQ53s5LDEpGnYzsNIUaFgT.jpg" alt="" />
      </div>
      <div className='middlebox'>
      <div className='middlebox_up'>
          <p className='title'> <strong>Koosta soovinimekiri </strong> ja vaata oma <br /> uue sisustuse kuumakset</p>
          </div>
        <div className='middlebox_left'>

          <table>
            <thead>
              <tr>
                <th>Toode</th>
                <th>Hind</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) =>
                <tr key={item.object + index}>
                  <td> <input type="text" defaultValue={item.object} /> </td>
                  <td> <input defaultValue={index.price}  
                          onChange={(e) => setItems([{...items, "price" : e.target.value}])} type="number" value={item.price} /> €
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className='buttons'>
            <div onClick={() => setItems([...items, {"object" : "Product", "price" : 0}])}>
            <img  className='icon' src="/add.png" alt="" />
            Lisa toode
            </div> 
            <div onClick={() => setItems(items.slice(0,items.length - 1) )}>
              <img src="/delete.png" alt="" className='icon'/>
              Kustuta
            </div>
          </div>
        </div>
        <div className='middlebox_right'>
              <div> <strong>{sum} € </strong> </div>
              <button>Taotle sisustuslaenu</button>
              <a href="https://www.lhv.ee/et/tingimused-ja-hinnakiri"> <div className='tutvu'>Tutvu tingimustega</div></a>
        </div>
      </div>
      <div className='lowerbox'>

      </div>
    </div>
  )
}

export default App
