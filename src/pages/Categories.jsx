import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../app/categoriesSlice";
import CategoriesCard from "../Components/CategoriesCard";

const Categories = () => {
    const { categories, loading, error } = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className="flex flex-wrap gap-10">
                    {categories.map((category) => (
                        <CategoriesCard key={category.id} category={category} />
                    ))}
                </div>
            )}
        </div>
    );
};
export default Categories;