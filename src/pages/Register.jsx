import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../app/userSlice";
import { useDispatch } from "react-redux";
import { FiUser, FiMail, FiLock, FiUserPlus } from "react-icons/fi";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
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

        dispatch(registerUser({
            name, email, password, avatar: `https://api.dicebear.com/7.x/bottts/svg`
        }));
        
        navigate("/login");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

            <div className="w-full max-w-md relative z-10 px-4 py-8">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 sm:p-10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                            Create Account
                        </h1>
                        <p className="text-slate-500">Join PremiumShop today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700 ml-1">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiUser className="text-slate-400" />
                                </div>
                                <input 
                                    onChange={(e) => setName(e.target.value)} 
                                    className="w-full pl-11 pr-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                                    placeholder="John Doe" 
                                    type="text" 
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700 ml-1">Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiMail className="text-slate-400" />
                                </div>
                                <input 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="w-full pl-11 pr-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                                    placeholder="Enter your email" 
                                    type="email" 
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-slate-700 ml-1">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiLock className="text-slate-400" />
                                </div>
                                <input 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    className="w-full pl-11 pr-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                                    placeholder="Min. 4 characters" 
                                    type="password" 
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md shadow-purple-200 mt-6"
                        >
                            <FiUserPlus />
                            Register
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500">
                            Already have an account?{" "}
                            <button 
                                onClick={() => navigate("/login")} 
                                className="font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                            >
                                Sign In
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;