function CardReview({ reviewData }) {
    const { name, stars, review } = reviewData;
    return (
        <>
            <div className="card">
                <h3>{name}</h3>
                <div>Stars: {stars}</div>
                <p>{review}</p>
            </div>
        </>
    );
}

export default CardReview;
