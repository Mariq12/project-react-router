import image from '../assets/img/doguito404.svg';
import '../styles/404.css';
const Page404 = () => {
    return (
        <main className="container flex flex--center flex--column">
            <figure>
                <img className="dog-image" src={image} alt="Doguito" />
                <figcaption>
                    <p className="notFound-text">Esta página no existe</p>
                </figcaption>
            </figure>
        </main>
    );
}

export default Page404;