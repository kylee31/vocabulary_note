import {Link} from 'react-router-dom';

export default function EmptyPage(){
    return (
        <>
        <h1>Wrong Access</h1>
        <Link to="/">돌아가기</Link>
        </>
    )
}