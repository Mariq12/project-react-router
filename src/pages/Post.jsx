import { useState, useEffect } from "react";
import "../styles/components-style/card.css";
import { useParams } from "react-router-dom";
import { search } from "../api/api";

const Post = ({ url }) => {
    const [post, setPost] = useState([]);

    //console.log(useParams());
    const { id } = useParams();
    //console.log(id);

    useEffect(() => {
        search(`/posts/${id}`, setPost);
    }, [id]);

    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    );
};

export default Post;