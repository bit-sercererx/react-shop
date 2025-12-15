import avatar from "../assets/avatar-1.png";
import { useNavigate } from "react-router-dom";
const CategoriesCard = ({ category }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div onClick={() => navigate(`/products/${category.id}`)} className="cursor-pointer" >
                <div
                    class="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg min-h-52 w-56 hover:shadow-xl bg-white"
                >
                    <div
                        class="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-3/6 rounded-lg"
                    >
                        <img className="w-full h-full object-cover" src={category?.image || avatar}
                            alt=""
                            onError={(e) => {
                                e.currentTarget.src = avatar;
                            }} />
                    </div>

                    <div class="px-5 pt-2 flex flex-col">
                        <h2 className="font-semibold ">{category.name}</h2>



                    </div>
                </div>

            </div>        </div>
    );
};
export default CategoriesCard;