import { useEffect, useState } from "react";
import "../styles/components-style/card.css";
import "../styles/components-style/product.css";
import { search } from "../api/api";
import { Link } from "react-router-dom";

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        search('/products', setProducts);
    }, []);

    return (
        <section className="posts container">
            {products.length > 0 ? (
                products.map(product => {
                    const { id, image_url, name, price } = product;
                    return (
                        <Link to={`/products/${id}`} className="post__card" key={id}>
                            <article className="card card__product post">
                    <figure>
                        <img src={image_url} alt={name} className="card-container--img"
                        />
                        <figcaption className="card-container--info">
                            <p className="card-category">{name}</p>
                            <p className="card-title">{price}</p>
                        </figcaption>
                    </figure>

                </article>
                        </Link>
                    );
                })
            ) : (
                <p>No products found.</p>
            )}
        </section>
    );
}

export default ListProduct;
