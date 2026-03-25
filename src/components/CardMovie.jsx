import { Link } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";

function Card({ movie }) {    
    const {title, abstract, release_year, image} = movie;

    return (
        <div className="card">
            <div>
                <img src={image}/>
            </div>
            <h3>{title}</h3>
            <p>{release_year}</p>
            <p>{abstract}</p>
        </div>
    );
}

export default Card;
