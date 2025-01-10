import { useState, useRef } from 'react';
import tagasisideFailist from "../../data/tagasiside.json";

function Tagasiside() {
    const [tagasisided, setTagasisided] = useState(tagasisideFailist);
    const tagasisideRef = useRef();



    const kustutaTagasiside = (index) => {
        tagasisideFailist.splice(index, 1);
        setTagasisided(tagasisideFailist.slice());
    }

    const lisaUusTagasiside = () => {
        if (tagasisideRef.current.value.trim() !== "") { 
            tagasisideFailist.push(tagasisideRef.current.value);
            setTagasisided(tagasisideFailist.slice());
            tagasisideRef.current.value = ""; 
        }
    }

    return (
        <div>
            <h1>Tagasiside</h1>
            {tagasisided.map((element, index) => (
                <div key={index}>
                    {element} 
                    <button onClick={() => kustutaTagasiside(index)}>x</button>
                </div>
            ))}
            <div style={{ marginTop: "20px" }}>
                <label >Lisa uus tagasiside:</label>
                <input  ref={tagasisideRef} type="text" placeholder="Sisesta tagasiside siia!" />
                <button onClick={lisaUusTagasiside}>Lisa</button>
            </div>
        </div>
    )
}

export default Tagasiside;
