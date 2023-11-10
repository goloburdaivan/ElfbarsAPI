import React from "react";
import '../Styles/FormStyles.css'
import axios from "axios";

const TastesTable = ({ tastes, onDelete }) => {
    const handleDelete = async (event) => {
        const id = +event.target.id;
        await axios.delete(`http://localhost:3000/tastes/${id}`)
            .then((response) => {
                onDelete(response.data);
            })
            .catch(error => {
                alert(`Нельзя удалить вкус, посколько он привязан к товару!\n${error}`);
            })
    }

    return (
        <div>
            <table id="categoryTable">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Удаление</th>
                </tr>
                </thead>
                <tbody>
                    {tastes.map(taste => {
                        return (
                            <tr key={taste.id}>
                                <td>{taste.id}</td>
                                <td>{taste.title}</td>
                                <td className="action"><center><a id={taste.id} href={"#"} onClick={ handleDelete }>❌</a></center></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TastesTable;