const OrdersCard = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
                <div className="flex justify-between w-full">
                    <p className="flex flex-col">
                        <span className="font-light">01.02.2023</span>
                        <span className="font-light">6 articles</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="font-medium text-2xl">$120.00</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </p>
                </div>
            </div>

        </div>
    );
};
export default OrdersCard;