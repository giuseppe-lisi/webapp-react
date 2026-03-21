import Card from "../components/Card";

function Movies() {
    const movie = {
        title: "Matrix",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
        year: "1999",
        desc: "Best movie ever made"
    };

    return (
        <>
            <div className="card-container wrapper">
                <Card movie={movie}/>
            </div>
        </>
    );
}

export default Movies;
