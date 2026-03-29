import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardReview from "../components/CardReview";
import ReviewForm from "../components/ReviewForm";

function MovieDetail() {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    function loadBookReviews() {
        axios
        .get(`http://localhost:3000/api/movies/${id}`)
        .then((res) => {
            setMovie(res.data);
        })
        .catch((err) => console.log("Qualcosa non va: ", err.message));
    }

    useEffect(() => {
        loadBookReviews()
    }, []);

    return (
        <>
            <div className="card">
                <img
                    src={`http://localhost:3000/static/movies/${movie.image}`}
                />
                <h3>{movie.title}</h3>
                <h2>{movie.release_year}</h2>
                <p>{movie.genre}</p>
                <p>{movie.abstract}</p>
                <Link to="/movies/">Torna alla lista dei film</Link>
            </div>
            <h3>Recensioni</h3>
            <h4>Media recensioni: {movie.avg}</h4>
            <div className="card-container">
                {movie.reviews?.map((review) => (
                    <CardReview review={review} key={review.id} />
                ))}
            </div>
            <ReviewForm movieId={movie.id} reloadBooks={loadBookReviews}/>
        </>
    );
}

export default MovieDetail;
