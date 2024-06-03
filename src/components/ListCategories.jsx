import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { search } from "../api/api";
import "../styles/blog.css";

const ListCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        search("/categories", setCategories)
    }, [])

    return (
        <ul className="category-list container flex">
            {
                categories.map(category => (
                    <Link to={`/category/${category.id}`} key={category.id}>
                        <li className={`category-list__category category-list__category--${category.id}`}>
                            {category.name}
                        </li>
                    </Link>
                ))
            }
        </ul>
    );
};

export default ListCategories;