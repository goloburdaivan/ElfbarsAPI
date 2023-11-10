import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import TastesTable from "./TastesTable";
import TasteForm from "./TasteForm";
import axios from "axios";

const TastesComponent = () => {

    const [tastes, setTastes] = useState([]);

    useEffect(() => {
        const fetchTastes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tastes');
                setTastes(response.data);
            } catch (error) {
                alert(`Ошибка при получении вкусов!\n${error.message}`);
            }
        }

        fetchTastes();
    }, []);

    const handleAddition = (taste) => {
        setTastes([...tastes, taste]);
    }

    const handleDeletion = (_tastes) => {
        setTastes(_tastes);
    }

    return (
        <div>
            <Navbar />
            <TasteForm onTasteAdded={ handleAddition } />
            <TastesTable tastes={tastes} onDelete={ handleDeletion } />
        </div>
    )
};

export default TastesComponent;