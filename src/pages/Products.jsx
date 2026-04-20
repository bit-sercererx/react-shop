import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { fetchProducts, fetchProductsById } from "../app/productsSlice";
import { useParams } from "react-router-dom";
import { FiLoader, FiAlertCircle, FiShoppingBag } from "react-icons/fi";

const Products = () => {
    const { products, loading, error } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const { id: categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            dispatch(fetchProductsById(categoryId));
        } else {
            dispatch(fetchProducts());
        }
    }, [dispatch, categoryId]);

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 flex items-center gap-3">
                        <FiShoppingBag className="text-indigo-600" />
                        {categoryId ? "Category Products" : "All Products"}
                    </h1>
                    <p className="text-slate-500 mt-2 text-lg">
                        Discover our premium collection
                    </p>
                </div>
            </div>

            {/* Content State */}
            {loading ? (
                <div className="flex flex-col items-center justify-center min-h-[400px]">
                    <FiLoader className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
                    <p className="text-slate-500 font-medium">Loading premium items...</p>
                </div>
            ) : error ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 bg-rose-50 rounded-3xl border border-rose-100">
                    <FiAlertCircle className="w-16 h-16 text-rose-500 mb-4" />
                    <h3 className="text-xl font-bold text-rose-800 mb-2">Oops! Something went wrong</h3>
                    <p className="text-rose-600 max-w-md">{error}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center sm:justify-items-start">
                    {products.length === 0 ? (
                        <div className="col-span-full py-16 text-center w-full bg-slate-100 rounded-3xl border border-slate-200 border-dashed">
                            <h2 className="text-2xl font-bold text-slate-700 mb-2">No products found</h2>
                            <p className="text-slate-500">Check back later for new arrivals.</p>
                        </div>
                    ) : (
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Products;
