import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../app/cartSlice";

const CartCard = () => {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const removeItem = (product) => {
        dispatch(removeFromCart(product));
    };

    return (
        <div className="w-full overflow-x-auto">
            <table className="table table-zebra w-full table-fixed">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="w-1/2">Product Name</th>
                        <th className="w-1/6 text-center">Price</th>
                        <th className="w-1/6 text-center">Quantity</th>
                        <th className="w-1/6 text-center">Subtotal</th>
                        <th className="w-1/6 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td className="truncate">{item.title}</td>
                            <td className="text-center">${item.price}</td>
                            <td className="text-center">{item.quantity}</td>
                            <td className="text-center font-medium">
                                ${item.price * item.quantity}
                            </td>
                            <td className="text-center">
                                <button onClick={() => removeItem(item)} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartCard;
