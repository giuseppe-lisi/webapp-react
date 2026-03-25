import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardReview from "../components/CardReview";

function MovieDetail() {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/movies/${id}`)
            .then((res) => {
                setMovie(res.data);
            })
            .catch((err) => console.log("Qualcosa non va: ", err.message));
    }, []);

    return (
        <>
            <div className="dettaglio">
                <img src={movie.image} />
                <h3>{movie.title}</h3>
                <h2>{movie.release_year}</h2>
                <p>{movie.genre}</p>
                <p>{movie.abstract}</p>
                <Link to="/movies/">Torna alla lista dei film</Link>
            </div>
            <div className="card-container">
                {movie.reviews?.map((review) => (
                    <CardReview review={review} key={review.id}/>
                ))}
            </div>
        </>
    );
}

export default MovieDetail;
