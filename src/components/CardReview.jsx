function CardReview({ review }) {

    const {name, vote, text} = review
    return (
        <>
            <div className="card">
                <h3>{name}</h3>
                <p>{vote}</p>
                <p>{text}</p>
            </div>
        </>
    );
}

export default CardReview;
