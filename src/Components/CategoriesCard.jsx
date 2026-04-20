import avatar from "../assets/avatar-1.png";
import { useNavigate } from "react-router-dom";

const CategoriesCard = ({ category }) => {
    const navigate = useNavigate();
    return (
        <div 
            onClick={() => navigate(`/products/${category.id}`)} 
            className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 w-full max-w-[280px] aspect-[4/3] hover:-translate-y-1"
        >
            {/* Background Image */}
            <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src={category?.image || avatar}
                alt={category.name}
                onError={(e) => {
                    e.currentTarget.src = avatar;
                }} 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="font-bold text-white text-xl drop-shadow-md">
                        {category.name}
                    </h2>
                    <div className="h-1 w-12 bg-indigo-500 mt-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;