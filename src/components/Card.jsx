function Card({ movie }) {    
    const {title, img, year, desc} = movie;

    return (
        <div className="card">
            <div>
                <img src={img}/>
            </div>
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{desc}</p>
        </div>
    );
}

export default Card;
