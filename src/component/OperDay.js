import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router";


export default function OperDay() {

    const days = useFetch("http://localhost:3001/days");
    const words=useFetch("http://localhost:3001/words");
    const history = useNavigate();

    function addDay() {
        //setIsDone(!isDone);
        fetch(`http://localhost:3001/days/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: days.length + 1
            }),
        }).then(res => {
            if (res.ok) {
                alert("생성 완료");
                //Link to처럼 a태그 사용없이 페이지 전환하고 싶을때 유용
                history(`/`);
            }
        });
    }

    //해당 day의 단어 리스트 어떻게 지우나..
    function delDay(){
        if(window.confirm("삭제하시겠습니까?")){
            fetch(`http://localhost:3001/days/${days.length}`,{
                method:"DELETE"
            })
            .then((res=>{
                if(res.ok){
                    history(`/`);
                }
            }))
        }
    }

    function delWord(){
        const thisWord=words.filter(word=>Number(word.day)!==days.length);
        console.log(thisWord);
            fetch(`http://localhost:3001/words/`,{
                method:'PUT',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    thisWord
                }),
            })
            .then(
                console.log("delete")
            )   
    }

    return (<div>
        <h3>현재 일수 : {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>
        <button onClick={()=>{delDay();delWord()}} className="btn_del">Day 삭제</button>
    </div>
    );
}