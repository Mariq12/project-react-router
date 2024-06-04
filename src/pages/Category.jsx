import { useState, useEffect} from "react";
import "../styles/blog.css";
import { search } from "../api/api";
import ListCategories from "../components/ListCategories";
import ListPost from "../components/ListPost";
import SubCategory from "./SubCategory";
import { useParams, Routes, Route, Link, useResolvedPath } from "react-router-dom";

const Category = () => {
    const [subcategories, setSubcategories] = useState([]);
    const { id } = useParams();

    const url = useResolvedPath("").pathname

    useEffect(() => {
        search(`/categories?id=${id}`, (response) => {
            setSubcategories(response[0].subcategories)
        } )
    }, [id])

    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet noticias</h2>
            </div>
            <ListCategories />
            <ul className="category-list container flex">
                {
                    subcategories.map(subcategory => (
                        <li className={`category-list__category category-list__category--${id}`} key={subcategory}>
                                <Link to={`${url}/${subcategory}`}>
                                {subcategory}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path="/" element={<ListPost url={`/posts?category=${id}`} />} />
                <Route path="/:subcategory" element={<SubCategory />} />
            </Routes>
        </>
    );
}

export default Category;