import { useParams } from "react-router-dom"

function MovieDetail() {
    const { id } = useParams();

    return (
        <>
            <h2>Dettaglio film</h2>
            <p>id film : {`${id}`}</p>
            <p>Descrizione film</p>
        </>
    )
}

export default MovieDetail