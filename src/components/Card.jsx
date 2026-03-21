import { Link } from "react-router-dom";

import MovieDetail from "../pages/MovieDetail";

function Card({ movie }) {    
    const { id, title, img, year, desc} = movie;

    return (
        <div className="card">
            <div>
                <img src={img}/>
            </div>
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{desc}</p>
            <Link to={`/movies/${id}`}>Vai al dettaglio</Link>
        </div>
    );
}

export default Card;
