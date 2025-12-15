import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./app/userSlice";

function App() {
  const navName = [
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Orders", path: "/orders" },
    { name: "Cart", path: "/cart" },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="flex justify-end items-center p-4 bg-white shadow-sm">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="sm:hidden p-2 rounded hover:bg-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        </button>

        {!token ? (
          <button
            onClick={handleLogin}
            className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm rounded bg-red-600 text-white hover:bg-red-700"
          >
            Logout
          </button>
        )}
      </div>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white border-e">
          <ul className="space-y-2 font-medium">
            {navName.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center px-2 py-1.5 rounded hover:bg-gray-200"
                >
                  <span className="ms-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Page Content */}
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
