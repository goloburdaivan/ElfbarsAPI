import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import CategoriesForm from "./CategoriesForm";
import CategoriesTable from "./CategoriesTable";
import axios from "axios";

const CategoriesComponent = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesResult = (await axios.get('http://localhost:3000/categories')).data;
                setCategories(categoriesResult);
            } catch (error) {
                alert(`Ошибка при получении категорий эльфбаров!\n${error.message}`);
            }
        }

        fetchCategories();
    }, []);

    const handleAdd = (category) => {
        setCategories([...categories, category]);
    }

    const handleDelete = (_categories) => {
        setCategories(_categories);
    }

    return (
        <div>
            <Navbar />
            <CategoriesForm onCategoryAdded={handleAdd} />
            <CategoriesTable categories={categories} onDelete={handleDelete} />
        </div>
    )
}
export default CategoriesComponent;