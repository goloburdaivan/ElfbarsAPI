import React, {useState} from "react";
import axios from "axios";
const TasteForm = ({ onTasteAdded = null }) => {

    const [taste, setTaste] = useState({ title: '' });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setTaste({...taste, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (onTasteAdded) {
            await axios.post('http://localhost:3000/tastes', taste)
                .then(result => {
                    onTasteAdded(result.data);
                    setTaste({title: ''});
                })
                .catch(error => {
                    alert(error.message);
                });
        }
    }

    return (
        <div>
            <h1>Добавление и удаление вкусов</h1>
            <form id="categoryForm" onSubmit={handleSubmit}>
                <label htmlFor="title">Название вкуса:</label>
                <input type="text" id="title" name="title" value={ taste.title } onChange={ handleChange } placeholder="Название вкуса" required />
                <br />
                <input type={"submit"} value={"Добавить"} />
            </form>
        </div>
    );
}

export default TasteForm;