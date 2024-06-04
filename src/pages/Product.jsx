import { useState, useEffect } from "react";
import "../styles/components-style/card.css";
import "../styles/components-style/product.css";
import { useParams, useNavigate } from "react-router-dom";
import { search } from "../api/api";

const Product = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        search(`/products/${id}`, setProduct).catch(() => {
            navigate("/not-found");
        });
    }, [id, navigate]);

    return (
        <main className="container flex flex--center">
            {product ? (
                <article className="card post">
                    <figure>
                        <img
                            className="card-container--img"
                            src={product.image_url} alt={product.name}
                        />
                        <figcaption className="card-container--info">
                            <p className="card-category">{product.name}</p>
                            <p className="card-title">{product.price}</p>
                        </figcaption>
                    </figure>

                </article>
            ) : (
                <p>Loading product...</p>
            )}
        </main>
    );
};

export default Product;

