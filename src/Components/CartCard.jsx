import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../app/cartSlice";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
import avatar from "../assets/avatar-1.png";

const CartCard = () => {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const removeItem = (product) => {
        dispatch(removeFromCart(product));
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    };

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm mt-6">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                    <FiShoppingBag className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-700 mb-2">Your cart is empty</h3>
                <p className="text-slate-500">Looks like you haven't added anything yet.</p>
            </div>
        );
    }

    return (
        <div className="w-full bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mt-6">
            <div className="hidden sm:grid grid-cols-12 gap-4 p-6 bg-slate-50/50 border-b border-slate-100 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                <div className="col-span-6">Product Details</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
            </div>

            <div className="divide-y divide-slate-100">
                {cart.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-6 items-center group transition-colors hover:bg-slate-50/50">
                        {/* Product Details */}
                        <div className="col-span-6 flex items-center gap-4 w-full">
                            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                                <img 
                                    src={item?.images?.[0] || avatar} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.currentTarget.src = avatar; }}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-base font-bold text-slate-800 line-clamp-2 mb-1">
                                    {item.title}
                                </h4>
                                <button 
                                    onClick={() => removeItem(item)} 
                                    className="text-sm text-rose-500 flex items-center gap-1 hover:text-rose-600 transition-colors font-medium"
                                >
                                    <FiTrash2 className="w-4 h-4" />
                                    Remove
                                </button>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-2 text-center font-medium text-slate-600 w-full sm:w-auto flex justify-between sm:block">
                            <span className="sm:hidden text-slate-400">Price:</span>
                            {formatPrice(item.price)}
                        </div>

                        {/* Quantity */}
                        <div className="col-span-2 text-center font-medium text-slate-800 w-full sm:w-auto flex justify-between sm:block bg-slate-50 sm:bg-transparent rounded-lg p-2 sm:p-0">
                            <span className="sm:hidden text-slate-400">Qty:</span>
                            {item.quantity}
                        </div>

                        {/* Subtotal */}
                        <div className="col-span-2 text-right font-bold text-indigo-600 text-lg w-full sm:w-auto flex justify-between sm:block">
                            <span className="sm:hidden text-slate-400 font-medium text-base">Subtotal:</span>
                            {formatPrice(item.price * item.quantity)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartCard;
