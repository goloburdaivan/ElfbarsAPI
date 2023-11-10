import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import TableComponent from "./TableComponent";
import EditElfbarForm from "./EditElfbarForm";
import Navbar from "./Navbar";
const EditElfbarComponent = () => {
    const { id } = useParams();
    const url = `http://localhost:3000/elfbars/${id}`;
    const [elfbar, setElfbar] = useState({
        id: 0,
        price: 0,
        count: 0,
        taste: {
            id: 0,
            title: ''
        },
        category: {
            id: 0,
            message_id: 0,
            tg_chat_id: 0,
            title: ''
        }
    });

    useEffect( () => {
        const fetchElfbar = async () => {
            try {
                const response = await axios.get(url);
                setElfbar(response.data);
            } catch (error) {
                alert(`Возникла ошибка при получении данных об эльфбаре с id = ${id}\n${error.message}`);
            }
        }

        fetchElfbar();
    }, []);

    const handleEdit = (_elfbar) => {
        setElfbar(_elfbar);
    }

    return (
        <div>
            <Navbar />
            <h1>Редактировать Elfbar</h1>
            <TableComponent deleteIcon={true} elfbars={[elfbar]} />
            <EditElfbarForm _elfbar={elfbar} onEditElfbar={handleEdit} />
        </div>
    );
}

export default EditElfbarComponent;