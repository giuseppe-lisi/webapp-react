import { useState } from "react";
import axios from "axios";

function ReviewForm({ movieId }) {

    const [formData, setFormData] = useState({ name: "", text: "", vote: "" });
    
    function handleSubmit(e) {
        e.preventDefault();

        const apiUrl = `http://localhost:3000/api/movies/${movieId}/reviews`;

        axios
            .post(apiUrl, formData)
            .then((results) => console.log("chiamata ok", results))
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
                    />
                </div>
                <div>
                    <h4>Recensione</h4>
                    <textarea name="text" onChange={setFieldValue}></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default ReviewForm;
