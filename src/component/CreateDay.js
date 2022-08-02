import useFetch from "../hooks/useFetch";
import {useNavigate} from "react-router";

export default function CreateDay() {
    const days=useFetch("http://localhost:3001/days");
    const history=useNavigate();
    function addDay(){
            //setIsDone(!isDone);
            fetch(`http://localhost:3001/days/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day:days.length+1
                }),
            }).then(res => {
                if (res.ok) {
                    alert("생성 완료");
                    //Link to처럼 a태그 사용없이 페이지 전환하고 싶을때 유용
                    history(`/`);
                }
            });
    }

    return (<div>
        <h3>현재 일수 : {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>
    </div>
    );
}