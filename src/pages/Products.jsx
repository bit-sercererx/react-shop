import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { fetchProducts, fetchProductsById } from "../app/productsSlice";
import { useParams } from "react-router-dom";

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

    }, [dispatch]);
    const addToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div >
            <h1 className="text-2xl font-bold">Products</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className="flex flex-wrap gap-10">

                    {products.length == 0 ? <h1 className="text-2xl font-bold text-center w-full text-red-500">No products</h1> : products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};
export default Products;
