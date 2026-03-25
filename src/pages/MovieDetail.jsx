import { useParams, Link } from "react-router-dom";
import CardReview from "../components/CardReview";

function MovieDetail() {
    return (
        <>
            <div className="dettaglio">
                <h2>Dettaglio film</h2>
                <h3>Title</h3>
                <p>Desc</p>
                <Link to="/movies/">Torna alla lista dei film</Link>
            </div>

            <h2>Recensioni</h2>
            <div className="card-container wrapper">
                {reviews.map((review) => {
                    return <CardReview reviewData={review} key={review.id} />;
                })}
            </div>
        </>
    );
}

export default MovieDetail;
