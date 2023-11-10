import React, {useEffect, useState} from "react";
import axios from "axios";

const EditElfbarForm = ({ _elfbar, onEditElfbar }) => {
    const [categories, setCategories] = useState([]);
    const [tastes, setTastes] = useState([]);
    const [elfbar, setElfbar] = useState({
        price: 0,
        count: 0,
        category: {
            id: 0,
            message_id: 0,
            tg_chat_id: 0,
            title: ''
        },
        taste: {
            id: 0,
            title: ''
        }
    });

    useEffect( () => {
        const fetchData = async () => {
            try {
                const categoriesResponse = (await axios.get("http://localhost:3000/categories")).data;
                const tastesResponse = (await axios.get("http://localhost:3000/tastes")).data;
                setCategories(categoriesResponse);
                setTastes(tastesResponse);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
        setElfbar(_elfbar);
    }, [_elfbar]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setElfbar({...elfbar, [name]: JSON.parse(value)});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(elfbar);

        try {
            const response = await axios.post('http://localhost:3000/elfbars', elfbar);
            onEditElfbar(response.data);
        } catch (error) {
            alert(`Неверные данные в форме изминения эльфбара! Заполните ее корректно\n${error.message}`);
        }
    }

    console.log();

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="price">Цена</label>
                    <input type="number"
                           value={elfbar.price}
                           onChange={handleChange}
                           className="form-control"
                           name="price"
                           id="price" placeholder="Введите цену" />
                </div>
                <div className="form-group">
                    <label htmlFor="count">Количество</label>
                    <input
                        type="number"
                        className="form-control"
                        value={elfbar.count}
                        onChange={handleChange}
                        name="count" id="count"
                        placeholder="Введите количество" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Категория</label>
                    <select value={JSON.stringify(elfbar.category)} onChange={handleChange} className="form-control" name="category" id="category">
                        <option value=""></option>
                        {categories.map((category => {
                            return <option key={category.id} value={JSON.stringify(category)}>{category.title} (Chat {category.tg_chat_id})</option>;
                        }))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="taste">Вкус</label>
                    <select value={JSON.stringify(elfbar.taste)} onChange={handleChange} className="form-control" name="taste" id="taste">
                        <option value=""></option>
                        {tastes.map((taste => {
                            return <option key={taste.id} value={JSON.stringify(taste)}>{taste.title}</option>;
                        }))}
                    </select>
                </div>
                <br />
                <button type="submit" className="btn btn-success">Изменить</button>
            </form>
        </div>
    );
}
export default EditElfbarForm;