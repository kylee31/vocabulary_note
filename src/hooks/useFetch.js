import { useEffect, useState } from "react";

//렌더링이 되고 api를 사용한다는 목적
export default function useFetch(url) {
    const [data,setData]=useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data);
            });
    }, [url]); //의존성 배열

    return data;
}