import { useDispatch } from "react-redux";
import avatar from "../assets/avatar-1.png";
import { addToCart } from "../app/cartSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const addCart = (product) => {
        dispatch(addToCart(product));
    };
    return (
        <div >
            <div
                class="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg min-h-52 w-56 hover:shadow-xl bg-white"
            >
                <div
                    class="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-3/6 rounded-lg"
                >
                    <img className="w-full h-full object-cover" src={product?.images?.[0] || avatar}
                        alt=""
                        onError={(e) => {
                            e.currentTarget.src = avatar;
                        }} />
                </div>

                <div class="px-5 pt-2 flex flex-col">
                    <h2 className="font-semibold ">{product.title}</h2>
                    <p className="line-clamp-2">{product.description}</p>
                    <p>{product.price}</p>

                    <button
                        class="bg-blue-500 cursor-pointer text-white px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-blue-700"
                        type="button"
                        onClick={() => addCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    );
};
export default ProductCard;