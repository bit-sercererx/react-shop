import CartCard from "../Components/CartCard";
import { useSelector } from "react-redux";
import { FiShoppingCart, FiCreditCard, FiArrowRight } from "react-icons/fi";

const Cart = () => {
    const { cart } = useSelector((state) => state.cart);
    
    // Calculate total price
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax example
    const total = subtotal + tax;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    };

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 flex items-center gap-3">
                    <FiShoppingCart className="text-indigo-600" />
                    Shopping Cart
                </h1>
                <p className="text-slate-500 mt-2 text-lg">
                    Review your premium items
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items */}
                <div className="flex-1">
                    <CartCard />
                </div>

                {/* Order Summary */}
                {cart.length > 0 && (
                    <div className="w-full lg:w-96 mt-6">
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8 sticky top-24">
                            <h2 className="text-xl font-bold text-slate-800 mb-6">Order Summary</h2>
                            
                            <div className="space-y-4 text-slate-600 mb-6">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-slate-800">{formatPrice(subtotal)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Estimated Tax</span>
                                    <span className="font-medium text-slate-800">{formatPrice(tax)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-green-500 font-medium">Free</span>
                                </div>
                                
                                <div className="pt-4 border-t border-slate-100">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-slate-800">Total</span>
                                        <span className="text-2xl font-bold text-indigo-600">{formatPrice(total)}</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-all shadow-md shadow-indigo-200">
                                <FiCreditCard className="w-5 h-5" />
                                Proceed to Checkout
                                <FiArrowRight className="w-5 h-5 ml-1" />
                            </button>
                            
                            <p className="text-center text-xs text-slate-400 mt-4">
                                Secure checkout powered by PremiumShop
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;