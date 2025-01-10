import joogidFailist from "../data/joogid.json";

function Avaleht() {
    return (
        <div>
            <h1>Avaleht</h1>
            <div>
                {joogidFailist.map((jook, index) => (
                    <div key={index}>{jook}</div>
                ))}
            </div>
        </div>
    );
}

export default Avaleht;
