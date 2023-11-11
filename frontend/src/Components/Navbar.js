import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/tastes" className="redact-taste">Редактирование вкусов</a>
            <a href="/categories" className="redact-category">Редактирование категорий</a>
        </div>
    )
}
export default Navbar;