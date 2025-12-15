import { useNavigate } from "react-router-dom";
import { loginUser } from "../app/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(loginUser({ email, password })).unwrap();

            navigate("/");
        } catch (error) {
            console.error("Login failed:", error);
            alert("Email or password is incorrect!");
        }
    }
    return (
        <div>
            <div className="flex items-center justify-center h-screen" >
                <div className="card px-8 py-6 rounded-lg bg-gray-800 w-72">
                    <h1 className="text-center font-bold text-3xl text-white">login</h1>
                    <form className="my-6">
                        <input onChange={(e) => { setEmail(e.target.value) }} className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Email" type="email" />
                        <input onChange={(e) => { setPassword(e.target.value) }} className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Password" type="password" />
                        <button type="submit" onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]">login</button>
                        <button type="submit" onClick={() => navigate("/register")} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]">register</button>
                    </form>
                </div>
            </div>        </div>
    );
};
export default Login