import CartCard from "../Components/CartCard";
import { useSelector } from "react-redux";

const Cart = () => {
    const { cart } = useSelector((state) => state.cart);
    return (
        <div>
            <h1 className="text-2xl font-bold">Cart Items</h1>
            <CartCard />
            {cart.length > 0 && (
                <div className="flex justify-end mt-5">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700">Checkout</button>
                </div>
            )}
        </div>
    );
};
export default Cart;