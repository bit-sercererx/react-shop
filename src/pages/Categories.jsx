import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../app/categoriesSlice";
import CategoriesCard from "../Components/CategoriesCard";
import { FiLoader, FiAlertCircle, FiGrid } from "react-icons/fi";

const Categories = () => {
    const { categories, loading, error } = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 flex items-center gap-3">
                        <FiGrid className="text-indigo-600" />
                        Categories
                    </h1>
                    <p className="text-slate-500 mt-2 text-lg">
                        Browse our collections
                    </p>
                </div>
            </div>

            {/* Content State */}
            {loading ? (
                <div className="flex flex-col items-center justify-center min-h-[400px]">
                    <FiLoader className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
                    <p className="text-slate-500 font-medium">Loading categories...</p>
                </div>
            ) : error ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 bg-rose-50 rounded-3xl border border-rose-100">
                    <FiAlertCircle className="w-16 h-16 text-rose-500 mb-4" />
                    <h3 className="text-xl font-bold text-rose-800 mb-2">Oops! Something went wrong</h3>
                    <p className="text-rose-600 max-w-md">{error}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center sm:justify-items-start">
                    {categories.map((category) => (
                        <CategoriesCard key={category.id} category={category} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Categories;