import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./app/userSlice";
import { useState } from "react";
import { FiBox, FiGrid, FiList, FiShoppingCart, FiLogOut, FiLogIn, FiMenu, FiX } from "react-icons/fi";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navName = [
    { name: "Products", path: "/products", icon: <FiBox className="w-5 h-5" /> },
    { name: "Categories", path: "/categories", icon: <FiGrid className="w-5 h-5" /> },
    { name: "Orders", path: "/orders", icon: <FiList className="w-5 h-5" /> },
    { name: "Cart", path: "/cart", icon: <FiShoppingCart className="w-5 h-5" /> },
  ];

  const token = localStorage.getItem("access_token");

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-30 sm:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-full transform transition-transform duration-300 ease-in-out glass sm:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col px-4 py-6">
          <div className="flex items-center justify-between mb-8 px-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PremiumShop
            </h1>
            <button className="sm:hidden text-slate-500 hover:text-slate-700" onClick={() => setIsSidebarOpen(false)}>
              <FiX className="w-6 h-6" />
            </button>
          </div>
          
          <ul className="space-y-2 flex-1">
            {navName.map((item, index) => {
              const isActive = location.pathname.startsWith(item.path);
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" 
                        : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto border-t border-slate-200 pt-4">
            {!token ? (
              <button
                onClick={handleLogin}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-medium transition-colors"
              >
                <FiLogIn />
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 font-medium transition-colors"
              >
                <FiLogOut />
                Logout
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col sm:ml-64 w-full min-h-screen">
        {/* Top Bar (Mobile) */}
        <div className="sm:hidden glass sticky top-0 z-20 flex justify-between items-center p-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <FiMenu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">PremiumShop</h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
