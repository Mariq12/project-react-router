import { useParams } from "react-router-dom";
import ListPost from "../components/ListPost";

const SubCategory = () => {
    const { subcategory } = useParams();
    
    return (
        <ListPost url={`/posts?subcategory=${subcategory}`} />
    );
}

export default SubCategory;