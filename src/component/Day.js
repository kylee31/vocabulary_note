import useFetch from "../hooks/useFetch";
import {useNavigate, useParams} from "react-router-dom";
import Word from './Word';

export default function Day() {
    const {day}=useParams();
    const days = useFetch("http://localhost:3001/days");
    const words=useFetch(`http://localhost:3001/words?day=${day}`);
    const history = useNavigate();

    const now=Number(day);

    function prev(){    
        if(now!==1){
        history(`/day/${now-1}`);
        }
    }

    function next(){
        if(now!==days.length){
        history(`/day/${now+1}`);
        }
    }

    return (
        <>
        <h2>Day {day}</h2>
        {words.length===0 && <span>Loading...</span>}
            <button onClick={prev} style={{ display: "inline", visibility:(now===1 ? "hidden": "visible")}} >◀</button>
            <table style={{display:"inline",margin:"50px"}}>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
            <button onClick={next}style={{display:"inline", visibility:(now===days.length ? "hidden": "visible")}}>▶</button>
        </>
    );
}