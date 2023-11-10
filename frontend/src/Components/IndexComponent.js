import React, {Component, useEffect, useState} from 'react';
import Navbar from "./Navbar";
import TableComponent from "./TableComponent";
import axios from "axios";
import AddElfbarForm from "./AddElfbarForm";

const IndexComponent = () => {

    const [elfbars, setElfbars] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('http://localhost:3000/elfbars');
                setElfbars(response.data);
            } catch (err) {
                alert(`Не удалось получить данные: ${err.message}`);
            }
        };

        fetch();
    }, []);

    const handleAddition = (elfbar) => {
        console.log(elfbar);
        console.log(...elfbars);
        setElfbars([...elfbars, elfbar]);
    }

    return (
        <div>
            <Navbar />
            <TableComponent elfbars={elfbars} />
            <AddElfbarForm onAddElfbar={handleAddition} />
        </div>
    )
};

export default IndexComponent;