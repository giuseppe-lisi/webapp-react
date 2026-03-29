import { useState } from "react";
import axios from "axios";

function ReviewForm({ movieId, reloadBooks }) {
    
    const [formData, setFormData] = useState({ name: "", text: "", vote: "" });
    const initialValues = { name: "", text: "", vote: "" };

    function handleSubmit(e) {
        e.preventDefault();

        const apiUrl = `http://localhost:3000/api/movies/${movieId}/reviews`;

        axios
            .post(apiUrl, formData)
            .then((results) => {
                reloadBooks();
                setFormData(initialValues);
            })
            .catch((err) => console.log(err));
    }

    function setFieldValue(e) {
        let newFormData = {
            ...formData,
        };

        newFormData[e.target.name] = e.target.value;

        setFormData(newFormData);
    }

    return (
        <>
            <h3>Aggiungi una recensione</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <h4>Autore</h4>
                    <input
                        type="text"
                        name="name"
                        placeholder="Autore recensione"
                        onChange={setFieldValue}
                        value={formData.name}
                    />
                </div>
                <div>
                    <h4>Voto</h4>
                    <input
                        type="number"
                        name="vote"
                        placeholder="Voto"
                        max={5}
                        min={1}
                        onChange={setFieldValue}
                        value={formData.vote}
                    />
                </div>
                <div>
                    <h4>Recensione</h4>
                    <textarea
                        name="text"
                        onChange={setFieldValue}
                        value={formData.text}
                    ></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default ReviewForm;
