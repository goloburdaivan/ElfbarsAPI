import React from 'react';
import Styles from '../Styles/Styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const TableComponent = ( { elfbars, deleteIcon } ) => {

    const handleDelete = async (event) => {
        event.preventDefault();
        const id = event.target.href.split('/').pop();
        try {
            await axios.delete(`http://localhost:3000/elfbars/${id}`);
            window.location = '/';
        } catch (error) {
            alert(`Возникла ошибка при удалении записи!\n${error}`);
        }
    }

    return (
        <div>
            <table className={Styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Категория</th>
                        <th>Вкус</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>ID ТГ канала</th>
                        <th>ID сообщения</th>
                        {!deleteIcon ? <th>Редактирование</th> : <th>Удаление</th> }
                    </tr>
                </thead>
                <tbody>
                    {elfbars.map((elfbar) => {
                        return (
                            <tr key={elfbar.id}>
                            <td>{elfbar.id}</td>
                            <td>{elfbar.category.title}</td>
                            <td>{elfbar.taste.title}</td>
                            <td>{elfbar.count}</td>
                            <td>{elfbar.price}</td>
                            <td>{elfbar.category.tg_chat_id}</td>
                            <td>{elfbar.category.message_id}</td>
                            {!deleteIcon ?
                                <td className="action"><a href={`/edit-elfbar/${elfbar.id}`}>✎</a></td> :
                                <td className="action"><a href={elfbar.id} onClick={handleDelete}>❌</a></td>}
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default TableComponent;