import React, {Component, useEffect, useState} from 'react';
import Navbar from "./Navbar";
import TableComponent from "./TableComponent";
import axios from "axios";

const IndexComponent = () => {

    const [elfbars, setElfbars] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('http://localhost:3000/elfbars');
                setElfbars(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetch();
    }, []);

    return (
        <div>
            <Navbar />
            <TableComponent elfbars={elfbars} />
        </div>
    )
};

export default IndexComponent;