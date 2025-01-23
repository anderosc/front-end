import { useRef } from 'react'
import PildidJSON from '../../data/pildid.json'
import { ToastContainer, toast } from 'react-toastify';



function LisaPilt() {
    const pealkiriRef = useRef();
    const urlRef = useRef();
    const sisuRef = useRef();

    // const lisa = () => {
    //   //  const pilt {url, pealkiri, sisu} võiks lisada
    //     PildidJSON.push(piltRef.current.value)
    // }

    const lisa = () => {
        if (urlRef.current.value === "") {
          toast.error("URL on puudu!");
          return;
          }
          if (!urlRef.current.value.endsWith(".jpg")) {
          toast.error("Pildi fail on vale. Sisesta .jpg fail!");
          return;
          }  
          if (pealkiriRef.current.value === "") {
          toast.error("Pealkiri on puudu!");
          return;
          } 
          if (sisuRef.current.value === "") {
          toast.error("Sisu on kirjeldamata!");
          return;
          }
      PildidJSON.push({
        "id" : PildidJSON.length + 1,
        "url" : urlRef.current.value,
        "pealkiri" : pealkiriRef.current.value, 
        "sisu" : sisuRef.current.value 
      })
      urlRef.current.value = "";
      pealkiriRef.current.value = "";
      sisuRef.current.value = "";
      toast.success("Pilt edukalt lisatud!");
    }

  return (
    <div>
    <label> Pilt </label> <br />
      <label>Pildi url:</label> <br />
      <input ref={urlRef} type="text" /> <br />
      <label>Pealkir:</label> <br />
      <input ref={pealkiriRef} type="text" /> <br />
      <label>Sisu:</label> <br />
      <input ref={sisuRef} type="text" /> <br />
    <button onClick={ lisa}>Lisa</button> <br />

    <ToastContainer 
    position="top-left"
    autoClose={4000}
    theme="dark"
    closeOnClick
    />
</div>
  )
}

export default LisaPilt