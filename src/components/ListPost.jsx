import { useEffect, useState } from "react";
import "../styles/components-style/card.css";
import { search } from "../api/api";
import { Link } from "react-router-dom";

const ListPost = ({ url }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        search(url, setPosts);
    }, [url]);
    //console.log(posts);

    return (
        <section className="posts container">
            {
            posts.map(post => {
                const { id, title, metadescription, category } = post;
                return <Link to={`/posts/${id}`} className={`post__card post-card--${category}`} key={id}>
                    <article>
                        <h3 className="post-card__title">{title}</h3>
                        <p className="post-card__meta">{metadescription}</p>
                    </article>
                </Link>
            })}
        </section>
    );
}

export default ListPost;