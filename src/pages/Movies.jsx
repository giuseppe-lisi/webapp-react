import CardMovie from "../components/CardMovie";
import movies from "../data/movies";

function Movies() {

    return (
        <>
            <div className="card-container wrapper">
                {movies.map((movie) => {
                    return <CardMovie movie={movie} key={movie.id}/>;
                })}
            </div>
        </>
    );
}

export default Movies;
