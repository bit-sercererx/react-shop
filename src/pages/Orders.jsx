import OrdersCard from "../Components/OrdersCard";

const Orders = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Orders</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p>Your orders will appear here.</p>
                <OrdersCard />
            </div>
        </div>
    );
};
export default Orders;