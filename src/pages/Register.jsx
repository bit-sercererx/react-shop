import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../app/userSlice";
import { useDispatch } from "react-redux";
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        if (!name || !email || !password) {
            alert("Please fill all the fields");
            return;
        }
        if (!email.includes("@")) {
            alert("Please enter a valid email");
            return;
        }
        if (password.length < 4) {
            alert("Password must be at least 4 characters long");
            return;
        }

        e.preventDefault();
        navigate("/login");
        console.log(
            name,
            email,
            password
        );
        dispatch(registerUser({
            name, email, password, avatar: `https://api.dicebear.com/7.x/bottts/svg`
        }));

    }

    return (
        <div className="flex items-center justify-center h-screen" >
            <div className="card px-8 py-6 rounded-lg bg-gray-800 w-72">
                <h1 className="text-center font-bold text-3xl text-white">Register</h1>
                <form className="my-6">
                    <input onChange={(e) => { setName(e.target.value) }} className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Name" type="text" />
                    <input onChange={(e) => { setEmail(e.target.value) }} className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Email" type="email" />
                    <input onChange={(e) => { setPassword(e.target.value) }} className="p-2 my-2 rounded w-[100%] focus:outline-blue-600" placeholder="Password" type="password" />
                    <button type="submit" onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]">Register</button>
                    <button onClick={() => navigate("/login")} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]">if you have an account <span className="text-white">Login</span></button>
                </form>
            </div>
        </div>
    );
};

export default Register;