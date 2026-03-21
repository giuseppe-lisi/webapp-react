import { useParams, Link } from "react-router-dom"

function MovieDetail() {
    const { id } = useParams();

    return (
        <>
            <h2>Dettaglio film</h2>
            <p>id film : {`${id}`}</p>
            <p>Descrizione film</p>
            <Link to="/movies/">Torna alla lista dei film</Link>
        </>
    )
}

export default MovieDetail