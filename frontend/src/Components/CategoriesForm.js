import React, {useState} from "react";
import axios from "axios";

const CategoriesForm = ({onCategoryAdded = null}) => {

    const [category, setCategory] = useState({
        title: '',
        message_id: 0,
        tg_chat_id: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCategory({...category, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (onCategoryAdded) {
            await axios.post('http://localhost:3000/categories', category)
                .then(result => {
                    onCategoryAdded(result.data);
                    setCategory({
                        title: '',
                        message_id: 0,
                        tg_chat_id: ''
                    });
                })
                .catch(error => {
                    alert(error.message);
                });
        }
    }

    return (
        <div>
            <h1>Добавление и удаление категорий</h1>
            <form id="categoryForm" onSubmit={handleSubmit}>
                <label htmlFor="title">Название категории:</label>
                <input type="text" id="title" name="title" value={ category.title } onChange={ handleChange } placeholder="Название категории" required />
                <label htmlFor="message_id">ID сообщения в канале:</label>
                <input type="text" id="message_id" name="message_id" value={ category.message_id } onChange={ handleChange } placeholder="ID сообщения в канале" required />
                <label htmlFor="tg_chat_id">ID канала:</label>
                <input type="text" id="tg_chat_id" name="tg_chat_id" value={ category.tg_chat_id } onChange={ handleChange } placeholder="ID канала" required />
                <br />
                <input type={"submit"} value={"Добавить"} />
            </form>
        </div>
    );
}

export default CategoriesForm;