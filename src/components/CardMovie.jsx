import { Link } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";

function Card({ movie }) {    
    const {id, title, abstract, release_year, image} = movie;

    return (
        <div className="card">
            <div>
                <img src={`http://localhost:3000/static/movies/${image}`}/>
            </div>
            <h3>{title}</h3>
            <p>{release_year}</p>
            <p>{abstract}</p>
            <Link to={`/movies/${id}`}>Vai al dettaglio</Link>
        </div>
    );
}

export default Card;
