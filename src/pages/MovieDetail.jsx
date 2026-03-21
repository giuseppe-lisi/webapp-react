import { useParams } from "react-router-dom"

function MovieDetail() {
    const { id } = useParams();
    
    return (
        <>
            <div>dettaglio film</div>
            <p>id film : {`${id}`}</p>
        </>
    )
}

export default MovieDetail