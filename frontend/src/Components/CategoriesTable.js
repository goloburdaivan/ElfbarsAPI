import React from "react";
import '../Styles/FormStyles.css'
import axios from "axios";

const CategoriesTable = ({ categories, onDelete }) => {
    const handleDelete = async (event) => {
        const id = +event.target.id;
        await axios.delete(`http://localhost:3000/categories/${id}`)
            .then((response) => {
                onDelete(response.data);
            })
            .catch(error => {
                alert(`Нельзя удалить категорию, посколько она привязана к товару!\n${error}`);
            })
    }

    return (
        <div>
            <table id="categoryTable">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>ID сообщения</th>
                    <th>ID канала</th>
                    <th>Удаление</th>
                </tr>
                </thead>
                <tbody>
                {categories.map(category => {
                    return (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.title}</td>
                            <td>{category.message_id}</td>
                            <td>{category.tg_chat_id}</td>
                            <td className="action"><center><a id={category.id} href={"#"} onClick={ handleDelete }>❌</a></center></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default CategoriesTable;