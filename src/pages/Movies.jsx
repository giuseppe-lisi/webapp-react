import CardMovie from "../components/CardMovie";
import axios from "axios";
import { useEffect, useState } from "react";

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/movies")
            .then(res => setMovies(res.data))
            .catch((err) =>
                console.error("Qualcosa è andato storto: ", err.message),
            );
    }, []);

    return (
        <>
            <div className="card-container">
                {movies.map((movie) => {
                    return <CardMovie movie={movie} key={movie.id} />;
                })}
            </div>
        </>
    );
}

export default Movies;
