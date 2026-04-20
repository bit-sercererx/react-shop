import { useDispatch } from "react-redux";
import avatar from "../assets/avatar-1.png";
import { addToCart } from "../app/cartSlice";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const addCart = (product) => {
        dispatch(addToCart(product));
    };
    
    // Format price properly
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(product.price);

    return (
        <div className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 w-full max-w-[280px] overflow-hidden border border-slate-100 hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-slate-50">
                <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={product?.images?.[0] || avatar}
                    alt={product.title}
                    onError={(e) => {
                        e.currentTarget.src = avatar;
                    }} 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-slate-700 shadow-sm">
                    {product?.category?.name || "Product"}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h2 className="font-semibold text-slate-800 text-lg leading-tight mb-1 line-clamp-1" title={product.title}>
                    {product.title}
                </h2>
                <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-1">
                    {product.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-xl font-bold text-indigo-600">{formattedPrice}</span>
                    <button
                        onClick={() => addCart(product)}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 shadow-sm"
                        title="Add to Cart"
                    >
                        <FiShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;